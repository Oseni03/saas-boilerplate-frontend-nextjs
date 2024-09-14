"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUpdateNotificationPreferenceMutation } from "@/redux/features/settingsApiSlice";
import { handleError } from "@/lib/utils";

function useNotificationPreferenceUpdate(preference) {
	const [updatePreference, { isLoading }] =
		useUpdateNotificationPreferenceMutation();

	function handleFormSubmit(formData) {
		const {
			email_notification,
			inapp_notification,
			push_notification,
			sms_notification,
		} = formData;

		updatePreference({
			email_notification,
			inapp_notification,
			push_notification,
			sms_notification,
		})
			.unwrap()
			.then(() => {
				toast.success("Notification preference updated");
			})
			.catch((error) => {
				// Check if the error has a response and data
				handleError(error);
			});
	}
	return {
		isLoading,
		handleFormSubmit,
	};
}

export default useNotificationPreferenceUpdate;
