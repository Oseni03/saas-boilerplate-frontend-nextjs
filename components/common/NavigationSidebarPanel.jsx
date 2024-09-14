import React from "react";
import SidebarPanel from "./SidebarPanel";
import { siteConfig } from "@/config/site";

const products = siteConfig.sideBarNav.products;
const generals = siteConfig.sideBarNav.generals;

function NavigationSidebarPanel({ isAuthenticated, router }) {
	let items = [];
	{
		isAuthenticated
			? (items = [
					...products,
					...generals,
					{ name: "Dashboard", href: "/dashboard" },
			  ])
			: (items = [...products, ...generals]);
	}

	return (
		<>
			{items.map((item) => (
				<SidebarPanel
					labelText={item.name}
					dropDowns={item.dropDowns}
					onClick={() => router.push(item.href)}
				/>
			))}
		</>
	);
}

export default NavigationSidebarPanel;
