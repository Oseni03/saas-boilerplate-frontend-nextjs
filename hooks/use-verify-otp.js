import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useVerifyOTPMutation } from "@/redux/features/settingsApiSlice";
import { handleError } from "@/lib/utils";

function useVerifyOTP() {
	const [verify, { isLoading }] = useVerifyOTPMutation();
	const router = useRouter();

	const [otp_token, setOTP] = useState("");

	const onChange = (value) => {
		setOTP(value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		verify(otp_token)
			.unwrap()
			.then(() => {
				toast.success("Two-step authentication activated");
				router.push("/settings");
			})
			.catch((error) => {
				handleError(error);
			});
	};
	return {
		otp_token,
		isLoading,
		onChange,
		onSubmit,
	};
}

export default useVerifyOTP;
