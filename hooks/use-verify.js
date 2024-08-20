"use client";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth, finishInitialLoad } from "@/redux/features/authSlice";
import { useTokenVerifyMutation } from "@/redux/features/authApiSlice";

function useVerify() {
	const dispatch = useAppDispatch();
	const [verify] = useTokenVerifyMutation();

	useEffect(() => {
		verify()
			.unwrap()
			.then(() => {
				dispatch(setAuth());
			})
			.finally(() => {
				dispatch(finishInitialLoad());
			});
	});
}

export default useVerify;
