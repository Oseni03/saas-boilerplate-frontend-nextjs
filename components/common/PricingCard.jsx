"use client";
import { Button } from "../ui/button";
import { useCreateCheckoutMutation } from "@/redux/features/subscriptionApiSlice";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { LOGIN_URL } from "@/utils/constants";
import Spinner from "./Spinner";

function PricingCard({
	features,
	subscription_subtitle,
	amount,
	interval,
	children,
	currency,
	...props
}) {
	const [createCheckout, { isLoading }] = useCreateCheckoutMutation();
	const router = useRouter();
	const pathname = usePathname();

	const handleSubscribeButton = () => {
		createCheckout(props.price_id)
			.unwrap()
			.then((data) => {
				router.push(data.url);
			})
			.catch((error) => {
				console.log(error);
				if ((error.status === 401) | (error.status === 403)) {
					toast.error("Sign in required");
					let loginWithNextUrl = `${LOGIN_URL}?next=/#pricing`;
					if (LOGIN_URL === pathname) {
						loginWithNextUrl = `${LOGIN_URL}`;
					}
					router.push(loginWithNextUrl);
				} else {
					toast.error("Something went wrong");
				}
			});
	};

	const btnText = props.trial_period_days ? "Start trial" : "Get started";

	return (
		<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
			<h3 className="mb-4 text-2xl font-semibold">{children}</h3>
			<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
				{subscription_subtitle}
			</p>
			<div className="flex justify-center items-baseline my-8">
				<span className="mr-2 text-5xl font-extrabold">
					{currency === "usd" ? "$" : "#"}
					{amount}
				</span>
				<span className="text-gray-500 dark:text-gray-400">
					/{interval}
				</span>
			</div>
			{/* List */}
			<ul role="list" className="mb-8 space-y-4 text-left">
				{features.map((feature, index) => (
					<li className="flex items-center space-x-3" key={index}>
						{/* Icon */}
						<svg
							className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
								clipRule="evenodd"
							></path>
						</svg>
						<span>{feature}</span>
					</li>
				))}
			</ul>
			<Button
				onClick={handleSubscribeButton}
				className="text-white bg-primary focus:ring-4 focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary"
				disabled={isLoading}
			>
				{isLoading ? <Spinner /> : `${btnText}`}
			</Button>
		</div>
	);
}

export default PricingCard;
