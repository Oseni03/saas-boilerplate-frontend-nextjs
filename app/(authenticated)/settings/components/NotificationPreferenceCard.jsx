import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import NotificationPreferenceForm from "@/app/(authenticated)/settings/components/NotificationPreferenceForm";

function NotificationPreferenceCard() {
	return (
		<div className="space-y-6 mx-3">
			<div>
				<h3 className="text-lg font-medium">
					Notifications preference
				</h3>
				<p className="text-sm text-muted-foreground">
					Configure how you receive notifications.
				</p>
			</div>
			<Separator />
			<NotificationPreferenceForm />
		</div>
	);
}

export default NotificationPreferenceCard;
