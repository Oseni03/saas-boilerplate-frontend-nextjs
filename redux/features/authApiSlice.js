import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		retrieveUser: builder.query({
			query: () => "/users/me/",
		}),
		socialAuthenticate: builder.mutation({
			query: ({ provider, state, code }) => ({
				url: `/auth/o/${provider}?state=${encodeURIComponent(
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
		tokenRefresh: builder.mutation({
			query: (refresh) => ({
				url: "/auth/jwt/refresh/",
				method: "POST",
				body: { refresh },
			}),
		}),
		tokenVerify: builder.mutation({
			query: () => ({
				url: "/auth/jwt/verify/",
				method: "POST",
			}),
		}),
		activation: builder.mutation({
			query: ({ user, token }) => ({
				url: `/auth/activate/${user}/${token}/`,
				method: "POST",
			}),
		}),
		logout: builder.mutation({
			query: () => ({
				url: `/auth/logout/`,
				method: "POST",
			}),
		}),
		resetPassword: builder.mutation({
			query: (email) => ({
				url: `/auth/password-reset/`,
				method: "POST",
				body: { email },
			}),
		}),
		resetPasswordConfirm: builder.mutation({
			query: ({ user, token, new_password }) => ({
				url: `/auth/password-reset/confirm/${user}/${token}/`,
				method: "POST",
				body: { new_password },
			}),
		}),
		updateProfile: builder.mutation({
			query: ({ first_name, last_name, phone_number }) => ({
				url: `/users/me/`,
				method: "PUT",
				body: { first_name, last_name, phone_number },
			}),
		}),
		changeUserPassword: builder.mutation({
			query: ({ old_password, new_password }) => ({
				url: `/users/change-password/`,
				method: "POST",
				body: { old_password, new_password },
			}),
		}),
		deactivateAccount: builder.mutation({
			query: () => ({
				url: `/users/me/`,
				method: "DELETE",
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
	useTokenVerifyMutation,
	useActivationMutation,
	useLogoutMutation,
	useResetPasswordMutation,
	useResetPasswordConfirmMutation,
	useUpdateProfileMutation,
	useChangeUserPasswordMutation,
	useDeactivateAccountMutation,
} = authApiSlice;
