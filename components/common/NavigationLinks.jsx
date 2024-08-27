import React from "react";
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	ArrowPathIcon,
} from "@heroicons/react/20/solid";
import NavLink from "./NavLink";
import { PopoverGroup } from "@headlessui/react";

function NavigationLinks() {
	const config = [
		{
			trigger: (
				<>
					Product
					<ChevronDownIcon
						aria-hidden="true"
						className="h-5 w-5 flex-none text-gray-400"
					/>
				</>
			),
			dropdownItems: [
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
			],
			footerItems: [
				{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
				{ name: "Contact sales", href: "#", icon: PhoneIcon },
			],
		},
		{
			href: "#",
			className: "text-sm font-semibold leading-6 text-gray-900",
			children: "Features",
		},
		{
			href: "#",
			className: "text-sm font-semibold leading-6 text-gray-900",
			children: "Marketplace",
		},
		{
			href: "#",
			className: "text-sm font-semibold leading-6 text-gray-900",
			children: "About us",
		},
		{
			href: "#",
			className: "text-sm font-semibold leading-6 text-gray-900",
			children: "Pricing",
		},
	];
	return (
		<PopoverGroup className="hidden lg:flex lg:gap-x-12">
			{config.map((item, index) => (
				<NavLink
					key={index}
					trigger={item.trigger}
					dropdownItems={item.dropdownItems}
					footerItems={item.footerItems}
					href={item.href}
					className={item.className}
					children={item.children}
				/>
			))}
		</PopoverGroup>
	);
}

export default NavigationLinks;
