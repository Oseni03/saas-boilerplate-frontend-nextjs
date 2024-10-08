"use client";

import React from "react";
import { usePathname } from "next/navigation";
import NavLink from "../common/NavLink";
import { Menu, Package2 } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import UpgradeCard from "../common/UpgradeCard";
import DashboardNavConfig from "@/utils/DashboardNavConfig";
import NotificationPopover from "@/components/common/NotificationPopover";
import { siteConfig } from "@/config/site";

const iconClassName = "h-5 w-5";
const linksConfig = DashboardNavConfig(iconClassName);

function DashboardSheet() {
	const pathname = usePathname();

	const selectedClassName =
		"mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground";
	const notSelectedClassName =
		"mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground";

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
					<div className="flex items-center justify-between gap-2 text-lg font-semibold mt-5">
						<NavLink href="/">
							<Package2 className="h-6 w-6" />
							<span className="sr-only">{siteConfig.name}</span>
						</NavLink>
						<NotificationPopover />
					</div>
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
