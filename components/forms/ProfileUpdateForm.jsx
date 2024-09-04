"use client";
import { useAppSelector } from "@/redux/hooks";
import useProfileUpdate from "@/hooks/use-profile-update";
import Form from "./Form";

function ProfileUpdateForm() {
	const user = useAppSelector((state) => state.user.user);
	console.log(user);

	const {
		first_name,
		last_name,
		phone_number,
		isLoading,
		onChange,
		onSubmit,
	} = useProfileUpdate(user);

	const config = [
		{
			labelText: "Your email",
			labelId: "email",
			type: "text",
			required: false,
			defaultValue: user?.email,
			disabled: true,
		},
		{
			labelText: "First name",
			labelId: "first_name",
			type: "text",
			value: first_name,
			required: false,
			defaultValue: user?.first_name,
		},
		{
			labelText: "Last name",
			labelId: "last_name",
			type: "text",
			value: last_name,
			required: false,
			defaultValue: user?.last_name,
		},
		{
			labelText: "Phone number",
			labelId: "phone_number",
			type: "text",
			value: phone_number,
			required: false,
			defaultValue: user?.phone_number,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText="Update"
			btnClassName="text-white"
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}

export default ProfileUpdateForm;
