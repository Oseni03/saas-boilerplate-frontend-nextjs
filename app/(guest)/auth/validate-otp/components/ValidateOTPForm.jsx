"use client";
import OTPForm from "@/components/common/OTPForm";
import useValidateOTP from "@/hooks/use-validate-otp";

function ValidateOTPForm() {
	const { otp_token, isLoading, onChange, onSubmit } = useValidateOTP();

	return (
		<OTPForm
			name="otp_token"
			value={otp_token}
			isLoading={isLoading}
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}

export default ValidateOTPForm;
