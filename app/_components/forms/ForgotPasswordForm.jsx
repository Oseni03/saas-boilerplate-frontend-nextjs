"use client";
import Form from "./Form";
import Link from "next/link";
import usePasswordReset from "@/hooks/use-password-reset";

function ForgotPasswordForm() {
	const { email, isLoading, onChange, onSubmit } = usePasswordReset();

	const config = [
		{
			labelText: "Your email",
			labelId: "email",
			type: "text",
			value: email,
			required: true,
		},
	];

	return (
		<div>
			<Form
				config={config}
				isLoading={isLoading}
				btnText="Request password reset"
				onChange={onChange}
				onSubmit={onSubmit}
			/>
			<p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
				Return back{" "}
				<Link href="/auth/login" className="font-medium text-primary">
					Sign in
				</Link>
			</p>
		</div>
	);
}

export default ForgotPasswordForm;
