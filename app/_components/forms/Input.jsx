import React from "react";

function Input({ labelId, type, onChange, value, children, required = false }) {
	console.log(labelId, type, children);
	return (
		<div>
			<label
				htmlFor={labelId}
				className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>
				{children}
			</label>
			<input
				type={type}
				name={labelId}
				id={labelId}
				className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
				// placeholder="name@company.com"
				value={value}
				onChange={onChange}
				required={required}
			/>
		</div>
	);
}

export default Input;
