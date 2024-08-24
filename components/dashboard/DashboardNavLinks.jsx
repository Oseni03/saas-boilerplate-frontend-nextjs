"use client";

import React from "react";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-react";
import { Badge } from "../ui/badge";
import NavLink from "../common/NavLink";
import { usePathname } from "next/navigation";

function DashboardNavLinks() {
	const pathname = usePathname();

	const selectedClassName =
		"flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary";
	const notSelectedClassName =
		"flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary";
	const linksConfig = [
		{
			href: "/dashboard",
			children: (
				<>
					<Home className="h-4 w-4" />
					Dashboard
				</>
			),
		},
		{
			href: "#",
			children: (
				<>
					<ShoppingCart className="h-4 w-4" />
					Orders
					<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
						6
					</Badge>
				</>
			),
		},
		{
			href: "/products",
			children: (
				<>
					<Package className="h-4 w-4" />
					Products{" "}
				</>
			),
		},
		{
			href: "/customers",
			children: (
				<>
					<Users className="h-4 w-4" />
					Customers
				</>
			),
		},
		{
			href: "#",
			children: (
				<>
					<LineChart className="h-4 w-4" />
					Analytics
				</>
			),
		},
	];
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
