import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

function NavLink({ isSelected, href, children, ...props }, ref) {
	const className = cn(props.className, "block py-2 px-3", {
		"text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500":
			isSelected,
		"text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700":
			!isSelected,
	});
	const NewClassName = cn(props.className, "dark:text-gray-100");
	if (!href && !props.trigger) {
		return (
			<Button
				className={NewClassName}
				type="button"
				onClick={props.onClick}
			>
				{children}
			</Button>
		);
	}
	if (props.trigger) {
		return (
			<Popover className="relative">
				<PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 dark:text-gray-100">
					{props.trigger}
				</PopoverButton>

				<PopoverPanel
					transition
					className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
				>
					<div className="p-4">
						{props.dropdownItems.map((item) => (
							<div
								key={item.name}
								className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
							>
								<div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
									<item.icon
										aria-hidden="true"
										className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
									/>
								</div>
								<div className="flex-auto">
									<a
										href={item.href}
										className="block font-semibold text-gray-900"
									>
										{item.name}
										<span className="absolute inset-0" />
									</a>
									<p className="mt-1 text-gray-600">
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
					{props.footerItems && (
						<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
							{props.footerItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
								>
									<item.icon
										aria-hidden="true"
										className="h-5 w-5 flex-none text-gray-400"
									/>
									{item.name}
								</Link>
							))}
						</div>
					)}
				</PopoverPanel>
			</Popover>
		);
	}

	return (
		<Link
			className={NewClassName}
			href={href}
			aria-current={isSelected ? "page" : "none"}
		>
			{children}
		</Link>
	);
}

export default NavLink;
