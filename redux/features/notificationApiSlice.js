import { apiSlice } from "../services/apiSlice";

const notificationApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		retrieveNotifications: builder.query({
			query: () => ({
				url: `/notifications/`,
			}),
		}),
		updateNotification: builder.mutation({
			query: (pk) => ({
				url: `/notifications/${pk}/update/`,
				method: "PUT",
			}),
		}),
		markReadAllNotifications: builder.mutation({
            query: () => ({
                url: `/notifications/mark-read/`,
                method: "POST",
			}),
		}),
	}),
});

export const {
	useRetrieveNotificationsQuery,
	useUpdateNotificationMutation,
	useMarkReadAllNotificationsMutation,
} = notificationApiSlice;
