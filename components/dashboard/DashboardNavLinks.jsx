import React from "react";
import {
	Home,
	LineChart,
	Package,
	Package2,
	ShoppingCart,
	Users2,
} from "lucide-react";
import NavLink from "../common/NavLink";

function DashboardNavLinks() {
	const linksConfig = [
		{
			href: "#",
			className:
				"group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base",
			children: (
				<>
					<Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
					<span className="sr-only">Acme Inc</span>
				</>
			),
		},
		{
			href: "/dashboard",
			className:
				"flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
			children: (
				<>
					<Home className="h-5 w-5" />
					Dashboard
				</>
			),
		},
		{
			href: "#",
			className: "flex items-center gap-4 px-2.5 text-foreground",
			children: (
				<>
					<ShoppingCart className="h-5 w-5" />
					Orders
				</>
			),
		},
		{
			href: "#",
			className:
				"flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
			children: (
				<>
					<Package className="h-5 w-5" />
					Products
				</>
			),
		},
		{
			href: "#",
			className:
				"flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
			children: (
				<>
					<Users2 className="h-5 w-5" />
					Customers
				</>
			),
		},
		{
			href: "#",
			className:
				"flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground",
			children: (
				<>
					<LineChart className="h-5 w-5" />
					Settings
				</>
			),
		},
	];
	return (
		<nav className="grid gap-6 text-lg font-medium">
			{linksConfig.map((link, index) => (
				<NavLink
					key={index}
					href={link.href}
					className={link.className}
					children={link.children}
				/>
			))}
		</nav>
	);
}

export default DashboardNavLinks;
