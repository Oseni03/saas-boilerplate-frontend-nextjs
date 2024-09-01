import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useVerifyOTPMutation } from "@/redux/features/settingsApiSlice";

function useVerifyOTP() {
	const [verify, { isLoading }] = useVerifyOTPMutation();
	const router = useRouter();

	const [opt_token, setOTP] = useState("");

	const onChange = (event) => {
		setOTP(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		verify(opt_token)
			.unwrap()
			.then(() => {
				toast.success("Two-step authentication activated");
				router.push("/settings");
			})
			.catch((error) => {
				console.log(error);
				toast.error("Invalid OTP code");
			});
	};
	return {
		opt_token,
		isLoading,
		onChange,
		onSubmit,
	};
}

export default useVerifyOTP;
