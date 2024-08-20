"use client";
import useRegister from "@/hooks/use-register";
import Form from "./Form";
import Link from "next/link";

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

	return (
		<div>
			<Form
				config={config}
				isLoading={isLoading}
				btnText="Sign up"
				onChange={onChange}
				onSubmit={onSubmit}
			/>
			<p className="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
				Already have an account?{" "}
				<Link href="/auth/login" className="font-medium text-primary">
					Sign in
				</Link>
			</p>
		</div>
	);
}

export default RegisterForm;
