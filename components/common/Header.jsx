"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavigationLinks from "./NavigationLinks";
import NavLink from "./NavLink";
import Link from "next/link";
import NavigationSidebarPanel from "./NavigationSidebarPanel";
import UserDropdownMenu from "./UserDropdownMenu";

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const router = useRouter();
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
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Your Company</span>
						<img
							alt=""
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							className="h-8 w-auto"
						/>
					</Link>
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
					{isAuthenticated ? <UserDropdownMenu /> : guestButtons()}
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
						<a href="/" className="-m-1.5 p-1.5">
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
					{isAuthenticated && <UserDropdownMenu />}
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<NavigationSidebarPanel
									isAuthenticated={isAuthenticated}
									router={router}
								/>
							</div>
							<div className="py-6">
								{!isAuthenticated && guestButtons()}
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</header>
	);
}
