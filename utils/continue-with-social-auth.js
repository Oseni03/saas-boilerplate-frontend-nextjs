import React from "react";
import { toast } from "react-toastify";

async function continueWithSocialAuth(provider, redirect) {
	try {
		const url = `${process.env.NEXT_PUBLIC_HOST}/api/auth/social/login/${provider}/`;
		// const url = `${
		// 	process.env.NEXT_PUBLIC_HOST
		// }/api/auth/social/login/${provider}/redirect_uri=${
		// 	process.env.NODE_ENV === "production"
		// 		? process.env.NEXT_PUBLIC_REDIRECT_URL
		// 		: "http://localhost:3000"
		// }/auth/${redirect}`;

		const res = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
			},
			credentials: "include",
		});

		const data = res.json();

		if (res.status === 200 && typeof window != "undefined") {
			window.location.replace(data.authorization_url);
		} else {
			toast.error("Something went wrong");
		}
	} catch (error) {
		toast.error(error);
	}
	return <div>continue-with-social-auth</div>;
}

export default continueWithSocialAuth;
