import Authentication from "@/components/common/Authentication";
import ForgotPasswordForm from "./components/ForgotPasswordForm";

export const metadata = {
	title: "Forgot password - Boilerplate",
	description: "Boilerplate forgot password page",
};

function Page() {
	const config = {
		title: "Forgot password",
		description: "Enter your email below to reset your password",
		form: <ForgotPasswordForm />,
		link: {
			href: "/auth/login",
			name: "Login",
		},
	};

	return <Authentication config={config} />;
}

export default Page;
