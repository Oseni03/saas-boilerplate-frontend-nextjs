"use client";

import Spinner from "@/components/common/Spinner";
import useSocialAuth from "@/hooks/use-social-auth";
import { useSocialAuthenticateMutation } from "@/redux/features/authApiSlice";

function Page() {
	const [googleAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(googleAuthenticate, "google-oauth2");

	return (
		<div className="h-screen flex items-center">
			<div className="mx-auto">
				<Spinner />;
			</div>
		</div>
	);
}

export default Page;
