import { apiSlice } from "../services/apiSlice";

const integrationApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		retrieveThirdparties: builder.query({
			query: () => ({
				url: `/integrations/thirdparty/`,
			}),
		}),
		activateIntegration: builder.mutation({
			query: (thirdparty) => ({
				url: `/integrations/activate/${thirdparty}/`,
				method: "POST",
			}),
		}),
		deactivateIntegration: builder.mutation({
			query: (pk) => ({
				url: `/integrations/deactivate/${pk}/`,
				method: "DELETE",
			}),
		}),
		initiateCallback: builder.mutation({
			query: ({ state, code }) => ({
				url: `/integrations/callback/`,
				method: "POST",
				body: { state, code },
			}),
		}),
	}),
});

export const {
	useRetrieveThirdpartiesQuery,
	useActivateIntegrationMutation,
	useDeactivateIntegrationMutation,
	useInitiateCallbackMutation,
} = integrationApiSlice;
