"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useCreateSupportMutation } from "@/redux/features/ticketsApiSlice";
import { handleError } from "@/lib/utils";

function useCreateSupport() {
	const [createSupport, { isLoading }] = useCreateSupportMutation();

	const [formData, setFormData] = useState({
		email: "",
		full_name: "",
		title: "",
		message: "",
	});

	const { email, full_name, title, message } = formData;

	const onChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event) => {
		event.preventDefault();

		createSupport({ email, full_name, title, message })
			.unwrap()
			.then(() => {
				toast.success("Support message submitted");
			})
			.catch((error) => {
				handleError(error);
			});
	};

	return {
		email,
		full_name,
		title,
		message,
		isLoading,
		onChange,
		onSubmit,
	};
}

export default useCreateSupport;
