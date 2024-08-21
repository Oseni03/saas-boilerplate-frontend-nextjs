"use client";
import usePasswordResetConfirm from "@/hooks/use-password-reset-confirm";
import Form from "./Form";

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
		<div>
			<Form
				config={config}
				isLoading={isLoading}
				btnText="Reset password"
				onChange={onChange}
				onSubmit={onSubmit}
			/>
		</div>
	);
}

export default PasswordResetForm;
