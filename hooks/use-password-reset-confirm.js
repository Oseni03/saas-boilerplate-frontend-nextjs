import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useResetPasswordConfirmMutation } from "@/redux/features/authApiSlice";

function usePasswordResetConfirm(user, token) {
	const [reset, { isLoading }] = useResetPasswordConfirmMutation();
	const router = useRouter();

	const [new_password, setNewPassword] = useState("");

	const onChange = (event) => {
		setNewPassword(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		console.log(user, token, new_password);
		reset({ user, token, new_password })
			.unwrap()
			.then(() => {
				toast.success("Password reset successful");
				router.push(PASSWORD_RESET_SUCCESSFUL_REDIRECT_URL);
			})
			.catch(() => {
				toast.error("Password reset failed");
			});
	};
	return {
		new_password,
		isLoading,
		onChange,
		onSubmit,
	};
}

export default usePasswordResetConfirm;
