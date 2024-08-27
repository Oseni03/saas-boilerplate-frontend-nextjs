"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavLink from "../common/NavLink";
import { Menu, Package2 } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import UpgradeCard from "../common/UpgradeCard";
import DashboardNavConfig from "../common/DashboardNavConfig";

function DashboardSheet() {
	const pathname = usePathname();

	const iconClassName = "h-5 w-5";
	const selectedClassName =
		"mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground";
	const notSelectedClassName =
		"mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground";

	const linksConfig = DashboardNavConfig(iconClassName);
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="shrink-0 md:hidden"
				>
					<Menu className="h-5 w-5" />
					<span className="sr-only">Toggle navigation menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="left" className="flex flex-col">
				<nav className="grid gap-2 text-lg font-medium">
					<NavLink
						href="/"
						className="flex items-center gap-2 text-lg font-semibold"
					>
						<Package2 className="h-6 w-6" />
						<span className="sr-only">Acme Inc</span>
					</NavLink>
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
				<UpgradeCard />
			</SheetContent>
		</Sheet>
	);
}

export default DashboardSheet;
