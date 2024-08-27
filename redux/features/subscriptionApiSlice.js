import { apiSlice } from "../services/apiSlice";

const settingsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		retrievePrices: builder.query({
			query: ({ interval, featured }) =>
				`/pricing/?interval=${encodeURIComponent(
					interval
				)}&featured=${encodeURIComponent(featured)}`,
		}),
		createCheckout: builder.mutation({
			query: ({ price_id }) => ({
				url: `/subscriptions/create-checkout/`,
				method: "POST",
				body: { price_id },
			}),
		}),
		finalizeCheckout: builder.mutation({
			query: ({ session_id }) => ({
				url: `/subscriptions/finalize-checkout/`,
				method: "POST",
				body: { session_id },
			}),
		}),
		cancelSubscription: builder.mutation({
			query: () => ({
				url: `/subscriptions/cancel/`,
				method: "PUT",
				body: {},
			}),
		}),
		createCustomerPortal: builder.mutation({
			query: () => ({
				url: `/subscriptions/create-customer-portal/`,
				method: "POST",
				body: {},
			}),
		}),
		retrieveSubscription: builder.query({
			query: () => `/subscriptions/`,
		}),
	}),
});

export const {
	useRetrievePricesQuery,
	useCreateCheckoutMutation,
	useFinalizeCheckoutMutation,
	useCancelSubscriptionMutation,
	useCreateCustomerPortalMutation,
	useRetrieveSubscriptionQuery,
} = settingsApiSlice;
