import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { setAuth } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { siteConfig } from "@/config/site";
import { setUser } from "@/redux/features/userSlice";
import { handleError } from "@/lib/utils";

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
			.then((resp) => {
				console.log(resp);
				if (resp.otp_auth_token) {
					router.push("/auth/validate-otp");
				} else {
					dispatch(setAuth());
					dispatch(setUser(resp.user));
					const nexturlValid =
						nextUrl &&
						nextUrl.startsWith("/") &&
						!invalidNextUrl.includes(nextUrl);
					toast.success("Login successful");
					if (nexturlValid) {
						router.replace(nextUrl);
					} else {
						router.replace(siteConfig.links.loginRedirect);
					}
				}
			})
			.catch((error) => {
				handleError(error);
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
