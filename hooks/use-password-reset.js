import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";

function usePasswordReset() {
	const [reset, { isLoading }] = useResetPasswordMutation();
	const router = useRouter();

	const [email, setEmail] = useState("");

	const onChange = (event) => {
		setEmail(event.target.value);
	};

	const onSubmit = (event) => {
		event.preventDefault();

		reset(email)
			.unwrap()
			.finally(() => {
				toast.success("Check your email for further instructions");
				router.push("/auth/login");
			});
	};
	return {
		email,
		isLoading,
		onChange,
		onSubmit,
	};
}

export default usePasswordReset;
