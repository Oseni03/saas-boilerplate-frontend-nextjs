"use client";
import Form from "./Form";
import useLogin from "@/hooks/use-login";

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
		<div>
			<Form
				config={config}
				isLoading={isLoading}
				btnText="Sign in"
				onChange={onChange}
				onSubmit={onSubmit}
			/>
			<p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
				Don’t have an account yet?{" "}
				<a href="#" className="font-medium text-primary">
					Sign up
				</a>
			</p>
		</div>
	);
}

export default LoginForm;
