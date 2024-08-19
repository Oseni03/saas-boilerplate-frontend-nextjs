"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useActivationMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";

function Page({ params }) {
	const router = useRouter();
	const [activation] = useActivationMutation();

	useEffect(() => {
		const { user, token } = params;
		activation({ user, token })
			.unwrap()
			.then(() => {
				toast.success("Account activated successfully");
			})
			.catch(() => {
				toast.error("Failed to activate account");
			})
			.finally(() => {
				router.push("/auth/login");
			});
	});

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
					Activating your account...
				</h1>
			</div>
		</section>
	);
}

export default Page;
