import LoginForm from "./components/LoginForm";
import Authentication from "@/components/common/Authentication";

export const metadata = {
	title: "Login",
	description: "Authentication forms built using the components.",
};

export default function Page() {
	const config = {
		title: "Login to your account",
		description: "Enter your credentials below to login to your account",
		form: <LoginForm />,
		consent: true,
		link: {
			href: "/auth/register",
			name: "Register",
		},
	};
	return <Authentication config={config} />;
}
