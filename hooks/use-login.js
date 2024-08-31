import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { setAuth } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { LOGIN_REDIRECT_URL } from "@/utils/constants";

const invalidNextUrl = ["/auth/login", "/auth/logout", "password-reset"];

function useLogin() {
	const [login, { isLoading }] = useLoginMutation();
	const router = useRouter();
	const dispatch = useAppDispatch();
	const searchParams = useSearchParams();
	const nextUrl = searchParams.get("next");

	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event) => {
		event.preventDefault();

		login({ email, password })
			.unwrap()
			.then(() => {
				dispatch(setAuth());
				const nexturlValid =
					nextUrl &&
					nextUrl.startsWith("/") &&
					!invalidNextUrl.includes(nextUrl);
				toast.success("Login successful");
				if (nexturlValid) {
					router.replace(nextUrl);
				} else {
					router.replace(LOGIN_REDIRECT_URL);
				}
			})
			.catch(() => {
				toast.error("Invalid login details");
			});
	};
	return {
		email,
		password,
		isLoading,
		onChange,
		onSubmit,
	};
}

export default useLogin;
