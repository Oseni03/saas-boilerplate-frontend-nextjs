"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useChangeUserPasswordMutation } from "@/redux/features/settingsApiSlice";
import { setAuth } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";

function useChangeUserPassword() {
	const [changePassword, { isLoading }] = useChangeUserPasswordMutation();
	const dispatch = useAppDispatch();

	const [formData, setFormData] = useState({
		old_password: "",
		new_password: "",
	});

	const { old_password, new_password } = formData;

	const onChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event) => {
		event.preventDefault();

		changePassword({ old_password, new_password })
			.unwrap()
			.then(() => {
				dispatch(setAuth());
				toast.success("Password change");
			})
			.catch(() => {
				toast.error("Invalid password");
			});
	};
	return {
		old_password,
		new_password,
		isLoading,
		onChange,
		onSubmit,
	};
}

export default useChangeUserPassword;
