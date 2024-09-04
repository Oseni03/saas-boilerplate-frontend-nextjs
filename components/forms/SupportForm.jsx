"use client";
import React from "react";
import Form from "./Form";
import useCreateSupport from "@/hooks/use-create-support";

function SupportForm() {
	const { email, full_name, title, message, isLoading, onChange, onSubmit } =
		useCreateSupport();

	const config = [
		{
			labelText: "Email",
			labelId: "email",
			type: "email",
			value: email,
			required: true,
		},
		{
			labelText: "Full name",
			labelId: "full_name",
			type: "text",
			value: full_name,
		},
		{
			labelText: "Title",
			labelId: "title",
			type: "text",
			value: title,
		},
		{
			labelText: "Message",
			labelId: "message",
			rows: "4",
			value: message,
			type: "textarea",
		},
	];

	return (
		<Form
			config={config}
			onChange={onChange}
			isLoading={isLoading}
			onSubmit={onSubmit}
			btnText="Submit"
			btnClassName="item-start text-white"
		/>
	);
}

export default SupportForm;
