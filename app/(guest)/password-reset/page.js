import React from "react";
import Image from "next/image";
import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import Link from "next/link";

export const metadata = {
	title: "Forgot password - Boilerplate",
	description: "Boilerplate forgot password page",
};

function Page() {
	return (
		<div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
			<div className="flex items-center justify-center py-12">
				<div className="mx-auto grid w-[350px] gap-6">
					<div className="grid gap-2 text-center">
						<h1 className="text-3xl font-bold">Forgot password</h1>
						<p className="text-balance text-muted-foreground">
							Enter your email below to reset your password
						</p>
					</div>
					<div className="grid gap-4">
						<ForgotPasswordForm />
						<div className="mt-4 text-center text-sm">
							Return back{" "}
							<Link href="/auth/login" className="underline">
								Sign in
							</Link>
						</div>
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
