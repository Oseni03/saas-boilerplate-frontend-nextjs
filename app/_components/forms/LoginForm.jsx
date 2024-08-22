"use client";
import Form from "./Form";
import useLogin from "@/hooks/use-login";
import Link from "next/link";
import Image from "next/image";

function LoginForm() {
	const { email, password, isLoading, onChange, onSubmit } = useLogin();

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
			link: {
				linkText: "Forgot password?",
				linkUrl: "/password-reset",
			},
		},
	];

	return (
		<Form
			config={config}
			social={true}
			isLoading={isLoading}
			btnText="Sign in"
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}

export default LoginForm;
