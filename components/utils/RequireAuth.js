"use client";
import React from "react";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import Spinner from "../common/Spinner";
import { toast } from "react-toastify";

function RequireAuth({ children }) {
	const router = useRouter();
	const { isLoading, isAuthenticated } = useAppSelector(
		(state) => state.auth
	);

	if (isLoading) {
		return (
			<div className="flex justify-center my-0">
				<Spinner />;
			</div>
		);
	}

	if (!isAuthenticated) {
		toast.error("Must be logged in");
		router.push("/auth/login");
	}

	return <>{children}</>;
}

export default RequireAuth;
