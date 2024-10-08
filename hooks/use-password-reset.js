import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useResetPasswordMutation } from "@/redux/features/authApiSlice";
import { siteConfig } from "@/config/site";

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
				router.push(siteConfig.links.passwordResetRedirect);
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
