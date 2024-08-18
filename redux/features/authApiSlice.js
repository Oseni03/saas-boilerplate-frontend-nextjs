import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		retrieveUser: builder.query({
			query: () => "/users/me/",
		}),
		socialAuthenticate: builder.mutation({
			query: ({ provider, state, code }) => ({
				url: `/o/${provider}?state=${encodeURIComponent(
					state
				)}&code=${encodeURIComponent(code)}`,
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
	}),
});

export const {
	useRetrieveUserQuery,
	useSocialAuthenticateMutation,
	useLoginMutation,
	useRegisterMutation,
} = authApiSlice;
