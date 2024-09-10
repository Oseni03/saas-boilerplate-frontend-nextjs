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
			query: (slug) => ({
				url: `/integrations/deactivate/${slug}/`,
				method: "POST",
			}),
		}),
	}),
});

export const {
	useRetrieveThirdpartiesQuery,
	useActivateIntegrationMutation,
	useDeactivateIntegrationMutation,
} = integrationApiSlice;
