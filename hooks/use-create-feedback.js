"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { useCreateFeedbackMutation } from "@/redux/features/ticketsApiSlice";
import { handleError } from "@/lib/utils";

function useCreateFeedback() {
	const [createFeedback, { isLoading }] = useCreateFeedbackMutation();

	const [formData, setFormData] = useState({
		rating: 3,
		title: "",
		message: "",
	});

	const { rating, title, message } = formData;

	const onChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSelect = (index) => {
		setFormData({ ...formData, rating: index + 1 });
	};

	const onSubmit = (event) => {
		event.preventDefault();

		createFeedback({ rating, title, message })
			.unwrap()
			.then(() => {
				toast.success("Feedback submitted");
			})
			.catch((error) => {
				handleError(error);
			});
	};

	return { rating, title, message, isLoading, onChange, onSelect, onSubmit };
}

export default useCreateFeedback;
