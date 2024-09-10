"use client";
import {
	useActivateIntegrationMutation,
	useDeactivateIntegrationMutation,
} from "@/redux/features/integrationApiSlice";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

export default function useIntegrationActivation(
	thirdparty_slug,
	integration_id,
	active
) {
	const [activateIntegration, { isLoading: activationLoading }] =
		useActivateIntegrationMutation();
	const [deactivateIntegration, { isLoading: deactivationLoading }] =
		useDeactivateIntegrationMutation();
	const router = useRouter();

	const [connected, setConnected] = useState(active);

	const onChange = () => {
		if (active === true) {
			deactivateIntegration(integration_id)
				.unwrap()
				.then(() => {
					setConnected(false);
					toast.success("Integration deactivated");
					router.refresh();
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			activateIntegration(thirdparty_slug)
				.unwrap()
				.then((resp) => {
					setConnected(false);
					if (resp.oauth_url) {
						router.push(resp.oauth_url);
					}
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
