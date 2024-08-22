import React from "react";
import Link from "next/link";
import {
	Home,
	LineChart,
	Package,
	Package2,
	Settings,
	Users2,
} from "lucide-react";
import TooltipMaker from "./TooltipMaker";

function SideBar() {
	const toolTipConfig = [
		{
			href: "#",
			className:
				"flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
			labelItem: <Home className="h-5 w-5" />,
			labelText: "Dashboard",
		},
		{
			href: "#",
			className:
				"flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
			labelItem: <Home className="h-5 w-5" />,
			labelText: "Orders",
		},
		{
			href: "#",
			className:
				"flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
			labelItem: <Package className="h-5 w-5" />,
			labelText: "Products",
		},
		{
			href: "#",
			className:
				"flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
			labelItem: <Users2 className="h-5 w-5" />,
			labelText: "Customers",
		},
		{
			href: "#",
			className:
				"flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
			labelItem: <LineChart className="h-5 w-5" />,
			labelText: "Analytics",
		},
	];

	const footerTooltipConfig = [
		{
			href: "#",
			className:
				"flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8",
			labelItem: <Settings className="h-5 w-5" />,
			labelText: "Settings",
		},
	];
	return (
		<aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
			<nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
				<Link
					href="#"
					className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
				>
					<Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
					<span className="sr-only">Acme Inc</span>
				</Link>
				<TooltipMaker config={toolTipConfig} />
			</nav>
			<nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
				<TooltipMaker config={footerTooltipConfig} />
			</nav>
		</aside>
	);
}

export default SideBar;
