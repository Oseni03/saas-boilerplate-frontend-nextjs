import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { toast } from "react-toastify";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export const handleError = (error) => {
	// Check if the error has a response from the server (e.g., axios error)
	if (error.data) {
		const errorData = error.data;

		// Field-specific errors (from custom DRF handler or similar)
		if (errorData.errors && Array.isArray(errorData.errors)) {
			errorData.errors.forEach((err) => {
				toast.error(`${err.field}: ${err.message}`);
			});
		}
		// General error message (e.g., authentication failure)
		else if (errorData.message) {
			toast.error(errorData.message);
		}
		// Handle status code-specific messages
		else if (error.response.status === 500) {
			toast.error("Internal server error. Please try again later.");
		} else if (error.response.status === 404) {
			toast.error("Resource not found.");
		} else {
			// Fallback for unknown errors
			toast.error("An error occurred. Please try again.");
		}
	} else {
		// Handle unexpected errors (e.g., network errors)
		toast.error(
			"Unable to reach the server. Please check your internet connection."
		);
	}
};
