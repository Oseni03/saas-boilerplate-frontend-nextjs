import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/features/authApiSlice";

function useLogin() {
	const [login, { isLoading }] = useLoginMutation();
	const router = useRouter();

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
				toast.success("Login successful");
				router.push("/dashboard");
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
