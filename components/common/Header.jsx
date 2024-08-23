"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import NavLink from "./NavLink";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from "@heroicons/react/20/solid";
import NavigationLinks from "./NavigationLinks";

const products = [
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
];
const callsToAction = [
	{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
	{ name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const dispatch = useAppDispatch();

	const [logout] = useLogoutMutation();
	const { isAuthenticated } = useAppSelector((state) => state.auth);

	const handleLogout = () => {
		logout()
			.unwrap()
			.then(() => {
				dispatch(setLogout());
			});
	};

	const isSelected = (path) => (pathname === path ? true : false);

	const generalLinks = () => (
		<>
			<NavLink isSelected={isSelected("#")} href="#">
				Feaures
			</NavLink>
			<NavLink isSelected={isSelected("#")} href="#">
				Marketplace
			</NavLink>
			<NavLink isSelected={isSelected("#")} href="#">
				Company
			</NavLink>
		</>
	);

	const guestLinks = () => (
		<>
			<li>
				<NavLink isSelected={isSelected("/auth/pricing")} href="#">
					Pricing
				</NavLink>
			</li>
		</>
	);

	const authLinks = () => (
		<>
			<li>
				<NavLink
					isSelected={isSelected("/auth/dashboard")}
					href="/dashboard"
				>
					Dashboard
				</NavLink>
			</li>
		</>
	);

	const guestButtons = () => (
		<>
			<NavLink onClick={() => router.push("/auth/register")}>
				Get started
			</NavLink>
		</>
	);

	const authButtons = () => (
		<>
			<NavLink>Logout</NavLink>
			{/* onClick={handleLogout()} */}
		</>
	);

	return (
		<header className="bg-white">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<a href="#" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<img
							alt=""
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							className="h-8 w-auto"
						/>
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(true)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon aria-hidden="true" className="h-6 w-6" />
					</button>
				</div>
				<NavigationLinks />
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					{isAuthenticated ? authButtons() : guestButtons()}
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								alt=""
								src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
								className="h-8 w-auto"
							/>
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="h-6 w-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
										Product
										<ChevronDownIcon
											aria-hidden="true"
											className="h-5 w-5 flex-none group-data-[open]:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{[...products, ...callsToAction].map(
											(item) => (
												<DisclosureButton
													key={item.name}
													as="a"
													href={item.href}
													className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
												>
													{item.name}
												</DisclosureButton>
											)
										)}
									</DisclosurePanel>
								</Disclosure>
								{generalLinks()}
								{isAuthenticated ? authLinks() : guestLinks()}
							</div>
							<div className="py-6">
								{isAuthenticated
									? authButtons()
									: guestButtons()}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
