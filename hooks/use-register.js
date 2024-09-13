import { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { REGISTRATION_REDIRECT_URL } from "@/utils/constants";
import { handleError } from "@/lib/utils";

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
			.then((resp) => {
				console.log(resp);
				toast.success("Please check email to activate account");
				router.push("/auth/register/confirm");
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

export default useRegister;
