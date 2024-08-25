"use client";

import React from "react";
import NavLink from "../common/NavLink";
import NavConfig from "../common/NavConfig";
import { usePathname } from "next/navigation";

function DashboardNavLinks() {
	const pathname = usePathname();

	const iconClassName = "h-4 w-4";
	const selectedClassName =
		"flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary";
	const notSelectedClassName =
		"flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary";
	const linksConfig = NavConfig(iconClassName);
	return (
		<nav className="grid items-start px-2 text-sm font-medium lg:px-4">
			{linksConfig.map((link, index) => (
				<NavLink
					key={index}
					href={link.href}
					className={
						pathname === link.href
							? selectedClassName
							: notSelectedClassName
					}
				>
					{link.children}
				</NavLink>
			))}
		</nav>
	);
}

export default DashboardNavLinks;
