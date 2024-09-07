import { apiSlice } from "../services/apiSlice";

const integrationApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		listIntegrations: builder.query({
			query: () => ({
				url: `/integrations/`,
			}),
		}),
		createIntegration: builder.mutation({
			query: ({ thirdparty, code }) => ({
				url: `/integrations/`,
				method: "POST",
				body: { thirdparty, code },
			}),
		}),
		retrieveThirdparties: builder.query({
			query: () => ({
				url: `/integrations/thirdparties/`,
			}),
		}),
		retrieveIntegration: builder.query({
			query: (id) => ({
				url: `/integrations/${id}/`,
			}),
		}),
		deleteIntegration: builder.mutation({
			query: (id) => ({
				url: `/integrations/${id}/`,
				method: "DELETE",
			}),
		}),
		activateIntegration: builder.mutation({
			query: (id) => ({
				url: `/integrations/${id}/activate/`,
				method: "POST",
			}),
		}),
		deactivateIntegration: builder.mutation({
			query: (id) => ({
				url: `/integrations/${id}/deactivate/`,
				method: "POST",
			}),
		}),
		revokeIntegration: builder.mutation({
			query: (id) => ({
				url: `/integrations/${id}/revoke/`,
				method: "POST",
			}),
		}),
	}),
});

export const {
	useListIntegrationsQuery,
	useCreateIntegrationMutation,
	useRetrieveThirdpartiesQuery,
	useRetrieveIntegrationQuery,
	useDeleteIntegrationMutation,
	useActivateIntegrationMutation,
	useDeactivateIntegrationMutation,
	useRevokeIntegrationMutation,
} = integrationApiSlice;
