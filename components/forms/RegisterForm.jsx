"use client";
import useRegister from "@/hooks/use-register";
import Form from "./Form";
import { continueWithGoogle } from "@/utils";

function RegisterForm() {
	const { email, password, isLoading, onChange, onSubmit } = useRegister();

	const config = [
		{
			labelText: "Your email",
			labelId: "email",
			type: "text",
			value: email,
			required: true,
		},
		{
			labelText: "Password",
			labelId: "password",
			type: "password",
			value: password,
			required: true,
		},
	];

	const social = {
		socialtext: "Sign up with Google",
		onClick: continueWithGoogle,
	};

	return (
		<Form
			config={config}
			social={social}
			isLoading={isLoading}
			btnText="Sign up"
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}

export default RegisterForm;
