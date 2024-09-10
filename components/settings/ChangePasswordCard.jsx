import ChangeUserPasswordForm from "../forms/ChangeUserPasswordForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

function ChangePasswordCard() {
	return (
		<Card x-chunk="dashboard-07-chunk-1" id="change-settings">
			<CardHeader>
				<CardTitle>Change Password</CardTitle>
				<CardDescription>
					Lipsum dolor sit amet, consectetur adipiscing elit
				</CardDescription>
			</CardHeader>
			<CardContent>
				<ChangeUserPasswordForm />
			</CardContent>
		</Card>
	);
}

export default ChangePasswordCard;
