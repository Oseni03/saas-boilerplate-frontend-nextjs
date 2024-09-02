"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth, finishInitialLoad } from "@/redux/features/authSlice";
import { useTokenVerifyMutation } from "@/redux/features/authApiSlice";
import { fetchUserData } from "@/redux/features/userSlice";

function useVerify() {
	const dispatch = useAppDispatch();
	const [verify] = useTokenVerifyMutation();

	useEffect(() => {
		verify()
			.unwrap()
			.then(() => {
				dispatch(setAuth());
				dispatch(fetchUserData());
			})
			.finally(() => {
				dispatch(finishInitialLoad());
			});
	}, []);
}

export default useVerify;
