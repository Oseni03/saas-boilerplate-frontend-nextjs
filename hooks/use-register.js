import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { REGISTRATION_REDIRECT_URL } from "@/utils/constants";

function useRegister() {
	const [register, { isLoading }] = useRegisterMutation();
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

		register({ email, password })
			.unwrap()
			.then(() => {
				toast.success("Please check email to activate account");
				router.push(REGISTRATION_REDIRECT_URL);
			})
			.catch(() => {
				toast.error("Failed to register account");
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

export default useRegister;
