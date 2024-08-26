"use client";
import React from "react";
import { CircleUser } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux/hooks";
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
import { useAppSelector } from "@/redux/hooks";

function UserDropdownMenu() {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const [logout] = useLogoutMutation();

	const handleLogout = () => {
		logout()
			.unwrap()
			.then(() => {
				dispatch(setLogout());
			});
	};

	const user = useAppSelector((state) => state.user.user);
	console.log(user);
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
				<DropdownMenuItem
					onSelect={() => {
						router.push("/settings");
					}}
				>
					Settings
				</DropdownMenuItem>
				<DropdownMenuItem
					onSelect={() => {
						router.push("/dashboard");
					}}
				>
					Dashboard
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem onSelect={handleLogout}>
					Logout
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}

export default UserDropdownMenu;
