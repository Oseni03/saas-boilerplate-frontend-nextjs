"use client";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import Spinner from "../common/Spinner";
import useNotificationPreferenceUpdate from "@/hooks/use-notification-preference-update";
import { useRetrieveNotificationPreferenceQuery } from "@/redux/features/settingsApiSlice";

function NotificationPreferenceForm() {
	const { data } = useRetrieveNotificationPreferenceQuery();
	console.log(data);

	const {
		email_notification,
		inapp_notification,
		push_notification,
		sms_notification,
		isLoading,
		onChange,
		onSubmit,
	} = useNotificationPreferenceUpdate(data);

	const config = [
		{
			labelText: "Email notification",
			labelId: "email_notification",
			value: email_notification,
			defaultValue: data?.email_notification,
		},
		{
			labelText: "InApp notification",
			labelId: "inapp_notification",
			value: inapp_notification,
			defaultValue: data?.inapp_notification,
		},
		{
			labelText: "Push notification",
			labelId: "push_notification",
			value: push_notification,
			defaultValue: data?.push_notification,
		},
		{
			labelText: "SMS notification",
			labelId: "sms_notification",
			value: sms_notification,
			defaultValue: data?.sms_notification,
		},
	];

	return (
		<form onSubmit={onSubmit}>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Type</TableHead>
						<TableHead>Active</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{config.map((input) => (
						<TableRow key={input.labelId}>
							<TableCell className="font-semibold">
								{input.labelText}
							</TableCell>
							<TableCell>
								<Switch
									name={input.labelId}
									onCheckedChange={(checked) =>
										onChange(input.labelId, checked)
									}
									checked={input.value} // Use the controlled `checked` prop
								/>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<Button type="submit" disabled={isLoading}>
				{isLoading ? <Spinner /> : "Update"}
			</Button>
		</form>
	);
}

export default NotificationPreferenceForm;
