import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setAuth, logout } from '@/redux/features/authSlice'
import { Mutex } from 'async-mutex'

// create a new mutex
const mutex = new Mutex()
const baseQuery = fetchBaseQuery({ 
    baseUrl: `${process.env.NEXT_PUBLIC_HOST}/api`,
    credentials: `include`,
})
const baseQueryWithReauth = async (args, api, extraOptions) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock()
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()
      try {
        const refreshResult = await baseQuery(
          {
            url: "auth/token-refresh/",
            method: "POST"
          },
          api,
          extraOptions
        )
        if (refreshResult.data) {
          api.dispatch(setAuth())
          // retry the initial query
          result = await baseQuery(args, api, extraOptions)
        } else {
          api.dispatch(logout())
        }
      } finally {
        // release must be called once the mutex should be released again.
        release()
      }
    } else {
      // wait until the mutex is available without locking it
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }
  return result
};


export const apiSlice = createApi({
    reducerPath: `api`,
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({}),
});
