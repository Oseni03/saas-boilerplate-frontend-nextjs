import React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Label } from "@/components/ui/label";

function MyInput({
	labelId,
	type,
	onChange,
	value,
	children,
	required = false,
	link,
}) {
	console.log(labelId, type, children);
	return (
		<div>
			<div className="flex justify-between align-center">
				<Label
					htmlFor={labelId}
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					{children}
				</Label>
				{link && (
					<div className="text-sm">
						<Link
							className="font-semibold text-primary"
							href={link.linkUrl}
						>
							{link.linkText}
						</Link>
					</div>
				)}
			</div>
			<Input
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

export default MyInput;
