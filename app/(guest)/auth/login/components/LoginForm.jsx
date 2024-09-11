"use client";
import Form from "../../../../../components/forms/Form";
import useLogin from "@/hooks/use-login";
import { continueWithGoogle } from "@/utils";

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

	const social = {
		socialtext: "Login with Google",
		onClick: continueWithGoogle,
	};

	return (
		<Form
			config={config}
			social={social}
			isLoading={isLoading}
			btnText="Sign in"
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}

export default LoginForm;
