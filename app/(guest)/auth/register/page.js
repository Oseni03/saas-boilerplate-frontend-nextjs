import RegisterForm from "./components/RegisterForm";
import Authentication from "@/components/common/Authentication";

export const metadata = {
	title: "Register",
	description: "Authentication forms built using the components.",
};

export default function Page() {
	const config = {
		title: "Create your account",
		description: "Enter your email below to create your account",
		form: <RegisterForm />,
		consent: true,
		link: {
			href: "/auth/login",
			name: "Login",
		},
	};

	return <Authentication config={config} />;
}
