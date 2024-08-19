import React from "react";
import Input from "./Input";

function Form({ config, isLoading, btnText, onChange, onSubmit }) {
	return (
		<form className="space-y-4 md:space-y-6 mb-3" onSubmit={onSubmit}>
			{config.map((input) => (
				<Input
					key={input.labelId} // Add a key prop to each element returned from map
					labelId={input.labelId}
					type={input.type}
					onChange={onChange}
					value={input.value}
					required={input.required}
				>
					{input.labelText}
				</Input>
			))}
			<button
				type="submit"
				className="w-full text-white bg-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
			>
				{isLoading ? "Loading..." : `${btnText}`}
				{/* Should display the spinner component instead of "Loading" */}
			</button>
		</form>
	);
}

export default Form;
