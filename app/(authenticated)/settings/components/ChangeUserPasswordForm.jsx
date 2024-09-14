"use client";
import Form from "@/components/forms/Form";
import useChangeUserPassword from "@/hooks/use-change-user-password";

function ChangeUserPasswordForm() {
	const { old_password, new_password, isLoading, onChange, onSubmit } =
		useChangeUserPassword();

	const config = [
		{
			labelText: "Old password",
			labelId: "old_password",
			type: "password",
			required: true,
			value: old_password,
		},
		{
			labelText: "New password",
			labelId: "new_password",
			type: "password",
			required: true,
			value: new_password,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText="Update password"
			btnClassName="text-white"
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}

export default ChangeUserPasswordForm;
