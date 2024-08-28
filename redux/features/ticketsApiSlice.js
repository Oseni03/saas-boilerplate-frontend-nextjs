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
	}),
});

export const { useCreateFeedbackMutation } = ticketsApiSlice;
