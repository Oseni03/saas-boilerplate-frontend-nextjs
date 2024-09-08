"use client";
import {
	useActivateIntegrationMutation,
	useDeactivateIntegrationMutation,
} from "@/redux/features/integrationApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

export default function useIntegrationActivation(thirdparty_slug, active) {
	const [activateIntegration, { isLoading: activationLoading }] =
		useActivateIntegrationMutation();
	const [deactivateIntegration, { isLoading: deactivationLoading }] =
		useDeactivateIntegrationMutation();
	const router = useRouter();

	const [connected, setConnected] = useState(active);

	const onChange = () => {
		if (active === true) {
			deactivateIntegration(thirdparty_slug)
				.unwrap()
				.then((resp) => {
					setConnected(false);
					console.log(resp);
					toast.success("Integration deactivated");
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			activateIntegration(thirdparty_slug)
				.unwrap()
				.then((resp) => {
					setConnected(false);
					console.log(resp);
					if (resp.oauth_url) {
						router.push(resp.oauth_url);
					}
					toast.success("Integration activated");
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	let isLoading = null;

	if (active === true) {
		isLoading = deactivationLoading;
	} else {
		isLoading = activationLoading;
	}

	return { connected, isLoading, onChange };
}
