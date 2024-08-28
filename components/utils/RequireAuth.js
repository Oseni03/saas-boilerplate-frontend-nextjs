"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { redirect } from "next/navigation";
import Spinner from "../common/Spinner";

function RequireAuth({ children }) {
	const { isLoading, isAuthenticated } = useAppSelector(
		(state) => state.auth
	);

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
		redirect(process.env.LOGIN_URL);
	}

	return <>{children}</>;
}

export default RequireAuth;
