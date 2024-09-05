"use client";

import { useFinalizeCheckoutMutation } from "@/redux/features/subscriptionApiSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";

function Page() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [finalize] = useFinalizeCheckoutMutation();

	// To make sure it run just once
	const effectRan = useRef(false);
	const session_id = searchParams.get("session_id");

	useEffect(() => {
		if (session_id && !effectRan.current) {
			finalize(session_id)
				.unwrap()
				.then((resp) => {
					toast.success(
						`Subscribed successfully to ${resp.subscription}`
					);
					router.push("/dashboard");
				})
				.catch(() => {
					toast.error("Failed to subscribe");
					router.push("/dashboard");
				});
		}

		return () => {
			effectRan.current = true;
		};
	}, [session_id]);
	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					Subscribing user...
				</h1>
			</div>
		</section>
	);
}

export default Page;
