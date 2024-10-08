import { apiSlice } from "../services/apiSlice";

const settingsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		updateProfile: builder.mutation({
			query: ({ first_name, last_name, phone_number }) => ({
				url: `/users/me/`,
				method: "PUT",
				body: { first_name, last_name, phone_number },
			}),
		}),
		retrieveNotificationPreference: builder.query({
			query: () => `/notifications/preferences/`,
		}),
		updateNotificationPreference: builder.mutation({
			query: ({
				email_notification,
				inapp_notification,
				push_notification,
				sms_notification,
			}) => ({
				url: `/notifications/preferences/`,
				method: "PUT",
				body: {
					email_notification,
					inapp_notification,
					push_notification,
					sms_notification,
				},
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
		enable2FAAuth: builder.mutation({
			query: () => ({
				url: `/users/generate-otp/`,
				method: "POST",
			}),
		}),
		verifyOTP: builder.mutation({
			query: (otp_token) => ({
				url: `/users/verify-otp/`,
				method: "POST",
				body: { otp_token },
			}),
		}),
		disableOTP: builder.mutation({
			query: () => ({
				url: `/users/disable-otp/`,
				method: "POST",
			}),
		}),
	}),
});

export const {
	useUpdateProfileMutation,
	useRetrieveNotificationPreferenceQuery,
	useUpdateNotificationPreferenceMutation,
	useChangeUserPasswordMutation,
	useDeactivateAccountMutation,
	useEnable2FAAuthMutation,
	useVerifyOTPMutation,
	useDisableOTPMutation,
} = settingsApiSlice;
