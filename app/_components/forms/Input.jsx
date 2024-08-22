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
	return (
		<div className="grid gap-2">
			<div className="flex items-center">
				<Label htmlFor={labelId}>{children}</Label>
				{link && (
					<Link
						href={link.linkUrl}
						className="ml-auto inline-block text-sm underline"
					>
						{link.linkText}
					</Link>
				)}
			</div>
			<Input
				type={type}
				name={labelId}
				id={labelId}
				// placeholder="name@company.com"
				value={value}
				onChange={onChange}
				required={required}
			/>
		</div>
	);
}

export default MyInput;
