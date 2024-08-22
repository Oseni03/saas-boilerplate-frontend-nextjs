"use client";
import Form from "./Form";
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
		<Form
			config={config}
			isLoading={isLoading}
			btnText="Request password reset"
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}

export default ForgotPasswordForm;
