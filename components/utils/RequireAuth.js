"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { usePathname, useRouter } from "next/navigation";
import Spinner from "../common/Spinner";
import { LOGIN_URL } from "@/utils/constants";

function RequireAuth({ children }) {
	const { isLoading, isAuthenticated } = useAppSelector(
		(state) => state.auth
	);
	const router = useRouter();
	const pathname = usePathname();

	if (isLoading) {
		return (
			<div className="h-screen flex items-center">
				<div className="mx-auto">
					<Spinner />;
				</div>
			</div>
		);
	}

	if (!isAuthenticated) {
		let loginWithNextUrl = `${LOGIN_URL}?next=${pathname}`;
		if (LOGIN_URL === pathname) {
			loginWithNextUrl = `${LOGIN_URL}`;
		}
		router.replace(loginWithNextUrl);
	}

	return <>{children}</>;
}

export default RequireAuth;
