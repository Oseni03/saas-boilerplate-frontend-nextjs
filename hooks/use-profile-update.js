"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import { useUpdateProfileMutation } from "@/redux/features/settingsApiSlice";
import { setUser } from "@/redux/features/userSlice";
import { useAppDispatch } from "@/redux/hooks";
import { handleError } from "@/lib/utils";

function useProfileUpdate(user) {
	const [updateProfile, { isLoading }] = useUpdateProfileMutation();
	const dispatch = useAppDispatch();

	const [formData, setFormData] = useState({
		first_name: user?.first_name,
		last_name: user?.last_name,
		phone_number: user?.phone_number,
	});

	const { first_name, last_name, phone_number } = formData;

	const onChange = (event) => {
		const { name, value } = event.target;
		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event) => {
		event.preventDefault();

		updateProfile({ first_name, last_name, phone_number })
			.unwrap()
			.then((data) => {
				console.log(data);
				dispatch(setUser(data));
				toast.success("Profile updated");
			})
			.catch((error) => {
				handleError(error);
			});
	};
	return {
		first_name,
		last_name,
		phone_number,
		isLoading,
		onChange,
		onSubmit,
	};
}

export default useProfileUpdate;
