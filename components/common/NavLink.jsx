import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function NavLink({ isSelected, href, children, ...props }, ref) {
	const className = cn(props.className, "block py-2 px-3", {
		"text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500":
			isSelected,
		"text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700":
			!isSelected,
	});
	if (!href) {
		return (
			<Button
				className={props.className}
				type="button"
				onClick={props.onClick}
			>
				{children}
			</Button>
		);
	}

	return (
		<Link
			className={className}
			href={href}
			aria-current={isSelected ? "page" : "none"}
		>
			{children}
		</Link>
	);
}

export default NavLink;
