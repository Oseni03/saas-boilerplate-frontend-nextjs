"use client";
import React from "react";
import { CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { logout as setLogout } from "@/redux/features/authSlice";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function UserDropdownMenu() {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [logout] = useLogoutMutation();

	const handleLogout = () => {
		logout()
			.unwrap()
			.then(() => {
				dispatch(setLogout());
				router.replace("/");
			});
	};
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild className="ms-auto">
				<Button
					variant="secondary"
					size="icon"
					className="rounded-full"
				>
					<CircleUser className="h-5 w-5" />
					<span className="sr-only">Toggle user menu</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>Settings</DropdownMenuItem>
				<DropdownMenuItem>Dashboard</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onSelect={handleLogout}>
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default UserDropdownMenu;
