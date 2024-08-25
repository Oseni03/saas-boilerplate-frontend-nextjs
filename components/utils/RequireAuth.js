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
			<div className="h-screen">
				<div className="flex justify-center my-auto">
					<Spinner />;
				</div>
			</div>
		);
	}

	if (!isAuthenticated) {
		redirect("/auth/login");
	}

	return <>{children}</>;
}

export default RequireAuth;
