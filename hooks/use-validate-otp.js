import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useValidateOTPMutation } from "@/redux/features/authApiSlice";
import { siteConfig } from "@/config/site";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/features/authSlice";
import { setUser } from "@/redux/features/userSlice";

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
			.then((resp) => {
				dispatch(setAuth());
				dispatch(setUser(resp.user));
				toast.success("Login successful");
				router.replace(siteConfig.links.loginRedirect);
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
