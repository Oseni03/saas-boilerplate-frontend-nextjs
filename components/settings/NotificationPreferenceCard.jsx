import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import NotificationPreferenceForm from "@/components/forms/NotificationPreferenceForm";

function NotificationPreferenceCard() {
	return (
		<Card x-chunk="dashboard-07-chunk-1" id="notification-settings">
			<CardHeader>
				<CardTitle>Notification preference</CardTitle>
				<CardDescription>
					Lipsum dolor sit amet, consectetur adipiscing elit
				</CardDescription>
			</CardHeader>
			<CardContent>
				<NotificationPreferenceForm />
			</CardContent>
		</Card>
	);
}

export default NotificationPreferenceCard;
