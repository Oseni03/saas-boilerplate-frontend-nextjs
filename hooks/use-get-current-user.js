"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import { setUser, clearUser } from "@/redux/features/userSlice";
import { useRetrieveUserQuery } from "@/redux/features/authApiSlice";

function useGetCurrentUser() {
	const dispatch = useAppDispatch();
	const { data, error, isLoading } = useRetrieveUserQuery();

	useEffect(() => {
		if (data) {
			dispatch(setUser(data));
		} else if (error) {
			dispatch(clearUser());
		}
	}, [data, error, dispatch]);

	return { data, error, isLoading };
}

export default useGetCurrentUser;
