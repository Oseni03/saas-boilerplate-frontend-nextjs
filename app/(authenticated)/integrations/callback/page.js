"use client";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Loading from "@/components/common/Loading";
import { useInitiateCallbackMutation } from "@/redux/features/integrationApiSlice";
import { toast } from "react-toastify";

function IntegrationCallbackPage() {
	const searchParams = useSearchParams();
	const [initiateCallback, { isLoading, isError }] =
		useInitiateCallbackMutation(); // Destructure loading and error state
	const router = useRouter();

	const state = searchParams.get("state");
	const code = searchParams.get("code");

	useEffect(() => {
		// Ensure state and code exist before proceeding
		if (state && code) {
			initiateCallback({ state, code }) // Pass an object for better flexibility and readability
				.unwrap()
				.then(() => {
					toast.success("Integration activated successfully");
				})
				.catch((error) => {
					toast.error("Integration failed. Please try again."); // Handle error
					console.error("Integration error:", error); // Log error for debugging
				})
				.finally(() => {
					router.push("/integrations");
				});
		} else {
			toast.error("Invalid state or code. Please try again.");
			router.push("/integrations");
		}
	}, [state, code, initiateCallback, router]);

	if (isLoading) {
		return <Loading />; // Show loading component while the mutation is in progress
	}

	// You can also handle potential error states with a fallback UI if needed.
	if (isError) {
		router.push("/integrations");
		toast(
			"There was an issue activating the integration. Please try again later."
		);
	}

	return null; // The component does not render anything else
}

export default IntegrationCallbackPage;
