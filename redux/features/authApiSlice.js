import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		retrieveUser: builder.query({
			query: () => "/users/me/",
		}),
		socialAuthenticate: builder.mutation({
			query: ({ provider, state, code }) => ({
				// url: `/o/${provider}?state=${encodeURIComponent(
				// 	state
				// )}&code=${encodeURIComponent(code)}`,
				url: `/auth/social/login/${provider}/`,
				method: "POST",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/x-www-form-urlencoded",
				},
			}),
		}),
		login: builder.mutation({
			query: ({ email, password }) => ({
				url: "/auth/login/",
				method: "POST",
				body: { email, password },
			}),
		}),
		register: builder.mutation({
			query: ({ email, password }) => ({
				url: "/auth/register/",
				method: "POST",
				body: { email, password },
			}),
		}),
		tokenRefresh: builder.mutation({
			query: () => ({
				url: "/auth/token-refresh/",
				method: "POST",
			}),
		}),
		activateAccount: builder.mutation({
			query: ({ user, token }) => ({
				url: `/auth/activate/${user}/${token}/`,
				method: "POST",
			}),
		}),
	}),
});

export const {
	useRetrieveUserQuery,
	useSocialAuthenticateMutation,
	useLoginMutation,
	useRegisterMutation,
	useTokenRefreshMutation,
	useActivateAccountMutation,
} = authApiSlice;
