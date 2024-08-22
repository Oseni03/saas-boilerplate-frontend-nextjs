import React from "react";
import Link from "next/link";
import Image from "next/image";
import nextImage from "@/public/next.svg";
import PasswordResetForm from "@/components/forms/PasswordResetForm";

export const metadata = {
	title: "Password reset - Boilerplate",
	description: "Boilerplate password reset page",
};

function Page({ params }) {
	const { user, token } = params;
	return (
		<div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="grid gap-2 text-center">
						<h1 className="text-3xl font-bold">Set password</h1>
						<p className="text-balance text-muted-foreground">
							Enter your new password below
						</p>
					</div>
					<div className="grid gap-4">
						<PasswordResetForm user={user} token={token} />
					</div>
				</div>
			</div>
			<div className="hidden bg-muted lg:block">
				<Image
					src="/placeholder.svg"
					alt="Image"
					width="1920"
					height="1080"
					className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
				/>
			</div>
		</div>
	);
}

export default Page;
