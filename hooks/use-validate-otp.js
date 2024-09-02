import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useValidateOTPMutation } from "@/redux/features/authApiSlice";
import { LOGIN_REDIRECT_URL } from "@/utils/constants";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/features/authSlice";

function useValidateOTP() {
	const [validate, { isLoading }] = useValidateOTPMutation();
	const router = useRouter();
	const dispatch = useAppDispatch();

	const [otp_token, setOTP] = useState("");

	const onChange = (value) => {
		setOTP(value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		validate(otp_token)
			.unwrap()
			.then(() => {
				dispatch(setAuth());
				toast.success("Login successful");
				router.replace(LOGIN_REDIRECT_URL);
			});
	};
	return {
		otp_token,
		isLoading,
		onChange,
		onSubmit,
	};
}

export default useValidateOTP;
