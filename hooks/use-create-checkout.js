import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";
import { LOGIN_URL } from "@/utils/constants";

function useCreateCheckout(createCheckout, price_id) {
	const router = useRouter();
	const pathname = usePathname();

	// Function to trigger checkout
	const handleCheckout = () => {
		createCheckout(price_id)
			.unwrap()
			.then((data) => {
				router.push(data.url);
			})
			.catch((error) => {
				console.error(error);
				if (error.status === 401 || error.status === 403) {
					toast.error("Sign in required");
					let loginWithNextUrl = `${LOGIN_URL}?next=/#pricing`;
					if (LOGIN_URL === pathname) {
						loginWithNextUrl = `${LOGIN_URL}`;
					}
					router.push(loginWithNextUrl);
				} else {
					handleError(error);
				}
			});
	};

	return handleCheckout; // Return the checkout function
}

export default useCreateCheckout;
