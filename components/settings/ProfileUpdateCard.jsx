import ProfileUpdateForm from "@/components/forms/ProfileUpdateForm";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

function ProfileUpdateCard() {
	return (
		<Card x-chunk="dashboard-07-chunk-0">
			<CardHeader>
				<CardTitle>Profile Details</CardTitle>
				<CardDescription>Update your profile settings</CardDescription>
			</CardHeader>
			<CardContent>
				<ProfileUpdateForm />
			</CardContent>
		</Card>
	);
}

export default ProfileUpdateCard;
