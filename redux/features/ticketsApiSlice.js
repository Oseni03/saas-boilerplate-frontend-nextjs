import { apiSlice } from "../services/apiSlice";

const ticketsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createFeedback: builder.mutation({
			query: ({ rating, title, message }) => ({
				url: `/tickets/feedbacks/`,
				method: "POST",
				body: { rating, title, message },
			}),
		}),
		createSupport: builder.mutation({
			query: ({ email, full_name, title, message }) => ({
				url: `/tickets/supports/`,
				method: "POST",
				body: { email, full_name, title, message },
			}),
		}),
	}),
});

export const { useCreateFeedbackMutation, useCreateSupportMutation } =
	ticketsApiSlice;
