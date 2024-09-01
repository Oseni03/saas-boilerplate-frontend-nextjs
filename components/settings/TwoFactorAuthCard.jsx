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

function TwoFactorAuthCard() {
	const router = useRouter();
	return (
		<Card x-chunk="dashboard-07-chunk-5">
			<CardHeader>
				<CardTitle>Two-Step AUthentication</CardTitle>
				<CardDescription>
					Protect your account with two-step authentication.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Button
					size="sm"
					onClick={() =>
						router.push("/settings/two-factor-auth/verify")
					}
				>
					Enable
				</Button>
			</CardContent>
		</Card>
	);
}

export default TwoFactorAuthCard;
