"use client";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setAuth, finishInitialLoad } from "@/redux/features/authSlice";
import {
	useTokenVerifyMutation,
	useRetrieveUserQuery,
} from "@/redux/features/authApiSlice";
import { clearUser, setUser } from "@/redux/features/userSlice";

function useVerify() {
	const dispatch = useAppDispatch();
	const [isVerified, setIsVerified] = useState(false);
	const [verify] = useTokenVerifyMutation();

	const {
		data: userData,
		isLoading: isFetchingUser,
		isError: userError,
	} = useRetrieveUserQuery(undefined, {
		skip: !isVerified,
	});

	useEffect(() => {
		verify()
			.unwrap()
			.then(() => {
				dispatch(setAuth());
				setIsVerified(true);
			})
			.finally(() => {
				dispatch(finishInitialLoad());
			});
	}, [verify, dispatch]);

	useEffect(() => {
		if (isVerified) {
			if (userData) {
				dispatch(setUser(userData));
			} else if (userError) {
				dispatch(clearUser());
			}
			dispatch(finishInitialLoad());
		}
	}, [isVerified, userData, userError, dispatch]);
}

export default useVerify;
