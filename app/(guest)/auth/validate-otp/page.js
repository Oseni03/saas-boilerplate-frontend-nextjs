import ValidateOTPForm from "./components/ValidateOTPForm";
import Authentication from "@/components/common/Authentication";

export const metadata = {
	title: "OTP Validation",
	description: "Authentication forms built using the components.",
};

export default function Page() {
	const config = {
		title: "OTP Validation",
		description: "Enter your OTP token",
		form: <ValidateOTPForm />,
	};
	return <Authentication config={config} />;
}
