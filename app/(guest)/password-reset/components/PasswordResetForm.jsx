"use client";
import usePasswordResetConfirm from "@/hooks/use-password-reset-confirm";
import Form from "../../../../components/forms/Form";

function PasswordResetForm({ user, token }) {
	const { new_password, isLoading, onChange, onSubmit } =
		usePasswordResetConfirm(user, token);

	const config = [
		{
			labelText: "New Password",
			labelId: "new_password",
			type: "password",
			value: new_password,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText="Reset password"
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}

export default PasswordResetForm;
