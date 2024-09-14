"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"; // Missing hook import
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/common/Spinner";
import useNotificationPreferenceUpdate from "@/hooks/use-notification-preference-update";
import { useRetrieveNotificationPreferenceQuery } from "@/redux/features/settingsApiSlice";

const notificationsFormSchema = z.object({
	email_notification: z.boolean().default(false).optional(),
	inapp_notification: z.boolean().default(false).optional(),
	push_notification: z.boolean().default(false).optional(),
	sms_notification: z.boolean().default(false).optional(),
});

function NotificationPreferenceForm() {
	const { data, isLoading: fetchLoading } =
		useRetrieveNotificationPreferenceQuery();

	const { isLoading, handleFormSubmit } = useNotificationPreferenceUpdate();

	// Initialize form with useForm hook and zod resolver
	const form = useForm({
		resolver: zodResolver(notificationsFormSchema),
		defaultValues: {
			email_notification: data?.email_notification,
			inapp_notification: data?.inapp_notification,
			push_notification: data?.push_notification,
			sms_notification: data?.sms_notification,
		},
	});

	const onSubmit = (formData) => {
		handleFormSubmit(formData);
	};

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<div className="space-y-4">
					{/* Email Notification */}
					<FormField
						control={form.control}
						name="email_notification"
						render={({ field }) => (
							<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
								<div className="space-y-0.5">
									<FormLabel className="text-base">
										Email notification
									</FormLabel>
									<FormDescription>
										Receive emails about your account
										activity.
									</FormDescription>
								</div>
								<FormControl>
									<Switch
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					{/* InApp Notification */}
					<FormField
						control={form.control}
						name="inapp_notification"
						render={({ field }) => (
							<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
								<div className="space-y-0.5">
									<FormLabel className="text-base">
										InApp notification
									</FormLabel>
									<FormDescription>
										Get notifications directly in the app.
									</FormDescription>
								</div>
								<FormControl>
									<Switch
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					{/* Push Notification */}
					<FormField
						control={form.control}
						name="push_notification"
						render={({ field }) => (
							<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
								<div className="space-y-0.5">
									<FormLabel className="text-base">
										Push notification
									</FormLabel>
									<FormDescription>
										Receive push notifications on your
										device.
									</FormDescription>
								</div>
								<FormControl>
									<Switch
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
							</FormItem>
						)}
					/>

					{/* SMS Notification */}
					<FormField
						control={form.control}
						name="sms_notification"
						render={({ field }) => (
							<FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
								<div className="space-y-0.5">
									<FormLabel className="text-base">
										SMS notification
									</FormLabel>
									<FormDescription>
										Receive SMS alerts for account activity.
									</FormDescription>
								</div>
								<FormControl>
									<Switch
										checked={field.value}
										onCheckedChange={field.onChange}
									/>
								</FormControl>
							</FormItem>
						)}
					/>
				</div>
				<Button
					type="submit"
					className="text-white mt-5"
					disabled={isLoading}
				>
					{isLoading ? <Spinner /> : "Update notification"}
				</Button>
			</form>
		</Form>
	);
}

export default NotificationPreferenceForm;
