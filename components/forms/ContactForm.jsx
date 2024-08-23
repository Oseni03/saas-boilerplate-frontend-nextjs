import React from "react";
import Form from "./Form";

function ContactForm() {
	const config = [
		{
			labelText: "First name",
			labelId: "first_name",
			type: "text",
			value: "",
			className: "w-1/2 p-3",
			required: true,
		},
		{
			labelText: "Last name",
			labelId: "last_name",
			type: "text",
			value: "",
			className: "w-1/2 p-3",
			required: true,
		},
		{
			labelText: "Email",
			labelId: "email",
			type: "email",
			value: "",
			required: true,
		},
		{
			labelText: "Message",
			labelId: "textarea",
			rows: "4",
			value: "",
			required: true,
		},
	];

	return <Form config={config} btnText="Contact us" />;
}

export default ContactForm;
