import React from "react";
import NavLink from "./NavLink";
import { PopoverGroup } from "@headlessui/react";
import { siteConfig } from "@/config/site";

function NavigationLinks() {
	return (
		<PopoverGroup className="hidden lg:flex lg:gap-x-12">
			{siteConfig.mainNav.map((item, index) => (
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
