import { useEffect, useRef } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth } from "@/redux/features/authSlice";
import { toast } from "react-toastify";
import { useRouter, useSearchParams } from "next/navigation";
import { LOGIN_REDIRECT_URL, LOGIN_URL } from "@/utils/constants";
import useVerify from "./use-verify";

function useSocialAuth(authenticate, provider) {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const searchParams = useSearchParams();

	// To make sure it run just once
	const effectRan = useRef(false);

	useEffect(() => {
		const state = searchParams.get("state");
		const code = searchParams.get("code");

		if (state && code && !effectRan.current) {
			authenticate({ provider, state, code })
				.unwrap()
				.then(() => {
					dispatch(setAuth());
					useVerify();
					toast.success("Logged in");
					router.replace(LOGIN_REDIRECT_URL);
				})
				.catch(() => {
					toast.error("Failed to login");
					router.push(LOGIN_URL);
				});
		}

		return () => {
			effectRan.current = true;
		};
	}, [authenticate, provider]);
}

export default useSocialAuth;
