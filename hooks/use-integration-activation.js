"use client";
import {
	useActivateIntegrationMutation,
	useDeactivateIntegrationMutation,
} from "@/redux/features/integrationApiSlice";
import { toast } from "react-toastify";

export default function useIntegrationActivation(integration_id, active) {
	const [activateIntegration, { isLoading: activationLoading }] =
		useActivateIntegrationMutation();
	const [deactivateIntegration, { isLoading: deactivationLoading }] =
		useDeactivateIntegrationMutation();

	const onChange = () => {
		if (active === true) {
			deactivateIntegration(integration_id)
				.unwrap()
				.then(() => {
					toast.success("Integration deactivated");
				});
		} else {
			activateIntegration(integration_id)
				.unwrap()
				.then(() => {
					toast.success("Integration activated");
				});
		}
	};

	let isLoading = null;

	if (active === true) {
		isLoading = deactivationLoading;
	} else {
		isLoading = activationLoading;
	}

	return { isLoading, onChange };
}
