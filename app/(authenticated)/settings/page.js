"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { MyAlertDialog } from "@/components/common/AlertDialog";
import ProfileUpdateForm from "@/components/forms/ProfileUpdateForm";
import NotificationPreferenceForm from "@/components/forms/NotificationPreferenceForm";
import ChangeUserPasswordForm from "@/components/forms/ChangeUserPasswordForm";
import { useDeactivateAccountMutation } from "@/redux/features/authApiSlice";
import { useAppDispatch } from "@/redux/hooks";
import { logout as setLogout } from "@/redux/features/authSlice";

function Page() {
	const router = useRouter();
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
		<main className="grid flex-1 mb-6 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<div className="mx-auto grid w-full xl:max-w-[59rem] flex-1 auto-rows-max gap-4">
				<div className="flex items-center gap-4">
					<Button
						variant="outline"
						size="icon"
						className="h-7 w-7"
						onClick={() => router.back()}
					>
						<ChevronLeft className="h-4 w-4" />
						<span className="sr-only">Back</span>
					</Button>
					<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
						Settings
					</h1>
				</div>
				<div className="grid gap-4">
					<div className="grid auto-rows-max gap-4 lg:col-span-3 lg:gap-8">
						<Card x-chunk="dashboard-07-chunk-0">
							<CardHeader>
								<CardTitle>Profile Details</CardTitle>
								<CardDescription>
									Update your profile settings
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ProfileUpdateForm />
							</CardContent>
						</Card>
						<Card x-chunk="dashboard-07-chunk-1">
							<CardHeader>
								<CardTitle>Notification preference</CardTitle>
								<CardDescription>
									Lipsum dolor sit amet, consectetur
									adipiscing elit
								</CardDescription>
							</CardHeader>
							<CardContent>
								<NotificationPreferenceForm />
							</CardContent>
						</Card>
						<Card x-chunk="dashboard-07-chunk-1">
							<CardHeader>
								<CardTitle>Change Password</CardTitle>
								<CardDescription>
									Lipsum dolor sit amet, consectetur
									adipiscing elit
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ChangeUserPasswordForm />
							</CardContent>
						</Card>
						<Card
							x-chunk="dashboard-07-chunk-5"
							className="border-red-800"
						>
							<CardHeader>
								<CardTitle>Archive Account</CardTitle>
								<CardDescription>
									Lipsum dolor sit amet, consectetur
									adipiscing elit.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<MyAlertDialog
									dialogTitle="Archive account"
									dialogDescription="Are you sure you want to deactivate this account? Cannot be undone"
									onClick={handleAccountDeactivation}
									ButtonClassName="bg-red-700 hover:bg-red-900"
								>
									<Button
										size="sm"
										className="bg-red-700 hover:bg-red-900"
									>
										Deactivate account
									</Button>
								</MyAlertDialog>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Page;
