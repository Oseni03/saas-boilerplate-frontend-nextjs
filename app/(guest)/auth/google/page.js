"use client";

import Loading from "@/components/common/Loading";
import useSocialAuth from "@/hooks/use-social-auth";
import { useSocialAuthenticateMutation } from "@/redux/features/authApiSlice";

function Page() {
	const [googleAuthenticate] = useSocialAuthenticateMutation();
	useSocialAuth(googleAuthenticate, "google-oauth2");

	return <Loading />;
}

export default Page;
