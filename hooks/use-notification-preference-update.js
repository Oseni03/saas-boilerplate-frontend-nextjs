import { useState } from "react";
import { toast } from "react-toastify";
import { useUpdateNotificationPreferenceMutation } from "@/redux/features/authApiSlice";

function useNotificationPreferenceUpdate(preference) {
	const [updatePreference, { isLoading }] =
		useUpdateNotificationPreferenceMutation();

	const [formData, setFormData] = useState({
		email_notification: preference?.email_notification,
		inapp_notification: preference?.inapp_notification,
		push_notification: preference?.push_notification,
		sms_notification: preference?.sms_notification,
	});

	const {
		email_notification,
		inapp_notification,
		push_notification,
		sms_notification,
	} = formData;

	const onChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event) => {
		event.preventDefault();

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
			.catch(() => {
				toast.error("Invalid data");
			});
	};
	return {
		email_notification,
		inapp_notification,
		push_notification,
		sms_notification,
		isLoading,
		onChange,
		onSubmit,
	};
}

export default useNotificationPreferenceUpdate;
