"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useActivationMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import Loading from "@/components/common/Loading";

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
				console.log("Gotten here finally");
				router.push("/auth/login");
			});
	}, []);

	return <Loading />;
}

export default Page;
