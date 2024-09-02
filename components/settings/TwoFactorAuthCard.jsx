"use client";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { useDisableOTPMutation } from "@/redux/features/settingsApiSlice";

function TwoFactorAuthCard() {
	const [disable2FAAuth] = useDisableOTPMutation();
	const user = useAppSelector((state) => state.user.user);
	const router = useRouter();

	const handleDisableOTPAuth = () => {
		disable2FAAuth()
			.unwrap()
			.finally(() => router.refresh());
	};

	return (
		<Card x-chunk="dashboard-07-chunk-5">
			<CardHeader>
				<CardTitle>Two-Step AUthentication</CardTitle>
				<CardDescription>
					Protect your account with two-step authentication.
				</CardDescription>
			</CardHeader>
			<CardContent>
				{user?.otp_enabled ? (
					<Button size="sm" onClick={() => handleDisableOTPAuth()}>
						Disable
					</Button>
				) : (
					<Button
						size="sm"
						onClick={() =>
							router.push("/settings/two-factor-auth/verify")
						}
					>
						Enable
					</Button>
				)}
			</CardContent>
		</Card>
	);
}

export default TwoFactorAuthCard;
