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

function NotificationPreferenceForm() {
	return (
		<form>
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Type</TableHead>
						<TableHead>Active</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-semibold">
							Email notification
						</TableCell>
						<TableCell>
							<Switch name="email_notification" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-semibold">
							SMS notification
						</TableCell>
						<TableCell>
							<Switch name="sms_notification" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-semibold">
							Push notification
						</TableCell>
						<TableCell>
							<Switch name="push_notification" />
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-semibold">
							InApp notification
						</TableCell>
						<TableCell>
							<Switch name="inapp_notification" />
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
			<div className="flex justify-end mt-4">
				<Button>Update</Button>
			</div>
		</form>
	);
}

export default NotificationPreferenceForm;
