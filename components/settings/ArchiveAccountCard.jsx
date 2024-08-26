"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { MyAlertDialog } from "@/components/common/AlertDialog";
import { useDeactivateAccountMutation } from "@/redux/features/authApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { logout as setLogout } from "@/redux/features/authSlice";
import { Button } from "@/components/ui/button";

function ArchiveAccountCard() {
	const dispatch = useAppDispatch();
	const [deactivateAccount] = useDeactivateAccountMutation();

	const handleAccountDeactivation = () => {
		deactivateAccount()
			.unwrap()
			.then(() => {
				dispatch(setLogout());
			});
	};
	return (
		<Card x-chunk="dashboard-07-chunk-5" className="border-red-800">
			<CardHeader>
				<CardTitle>Archive Account</CardTitle>
				<CardDescription>
					Lipsum dolor sit amet, consectetur adipiscing elit.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<MyAlertDialog
					dialogTitle="Archive account"
					dialogDescription="Are you sure you want to deactivate this account? Cannot be undone"
					onClick={handleAccountDeactivation}
					ButtonClassName="bg-red-700 hover:bg-red-900"
				>
					<Button size="sm" className="bg-red-700 hover:bg-red-900">
						Deactivate account
					</Button>
				</MyAlertDialog>
			</CardContent>
		</Card>
	);
}

export default ArchiveAccountCard;
