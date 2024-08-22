import React from "react";
import Input from "./Input";
import Spinner from "../common/Spinner";
import { Button } from "@/components/ui/button";

function Form({ config, social, isLoading, btnText, onChange, onSubmit }) {
	return (
		<>
			<form className="space-y-4 md:space-y-6 mb-3" onSubmit={onSubmit}>
				{config.map((input) => (
					<Input
						key={input.labelId} // Add a key prop to each element returned from map
						labelId={input.labelId}
						type={input.type}
						onChange={onChange}
						value={input.value}
						required={input.required}
						link={input.link}
					>
						{input.labelText}
					</Input>
				))}
				<Button type="submit" className="w-full" disabled={isLoading}>
					{isLoading ? <Spinner /> : `${btnText}`}
				</Button>
			</form>
			{social && (
				<Button
					variant="outline"
					className="w-full"
					onClick={social.onClick}
				>
					{social.socialtext}
				</Button>
			)}
		</>
	);
}

export default Form;
