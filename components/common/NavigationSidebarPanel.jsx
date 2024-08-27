import React from "react";
import SidebarPanel from "./SidebarPanel";
import {
	ArrowPathIcon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { PhoneIcon, PlayCircleIcon } from "@heroicons/react/20/solid";

function NavigationSidebarPanel({ isAuthenticated, router }) {
	const products = [
		{
			name: "products",
			dropDowns: [
				{
					name: "Analytics",
					description: "Get a better understanding of your traffic",
					href: "#",
					icon: ChartPieIcon,
				},
				{
					name: "Engagement",
					description: "Speak directly to your customers",
					href: "#",
					icon: CursorArrowRaysIcon,
				},
				{
					name: "Security",
					description: "Your customers’ data will be safe and secure",
					href: "#",
					icon: FingerPrintIcon,
				},
				{
					name: "Integrations",
					description: "Connect with third-party tools",
					href: "#",
					icon: SquaresPlusIcon,
				},
				{
					name: "Automations",
					description: "Build strategic funnels that will convert",
					href: "#",
					icon: ArrowPathIcon,
				},
				{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
				{ name: "Contact sales", href: "#", icon: PhoneIcon },
			],
		},
	];
	const generals = [
		{ name: "Feaures", href: "" },
		{ name: "Marketplace", href: "" },
		{ name: "About us", href: "" },
		{ name: "pricing", href: "/#pricing" },
	];
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
