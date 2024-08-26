import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PricingCard from "./PricingCard";

const Pricing = () => {
	const monthlyConfig = [
		{
			priceTitle: "Starter",
			priceDescription: "Relevant for one user.",
			price: "$19",
			interval: "month",
			features: [
				"Individual configuration",
				"No setup, or hidden fees",
				"Team size: 5 developers",
				"Premium support: 12 months",
				"Free updates: 12 months",
			],
		},
		{
			priceTitle: "Company",
			priceDescription:
				"Relevant for multiple users, extended & premium support",
			price: "$99",
			interval: "month",
			features: [
				"Individual configuration",
				"No setup, or hidden fees",
				"Team size: 10 developers",
				"Premium support: 24 months",
				"Free updates: 24 months",
			],
		},
		{
			priceTitle: "Enterprise",
			priceDescription:
				"Best for large scale uses and extended redistribution rights.",
			price: "$499",
			interval: "month",
			features: [
				"Individual configuration",
				"No setup, or hidden fees",
				"Team size: 100+ developers",
				"Premium support: 36 months",
				"Free updates: 36 months",
			],
		},
	];

	const yearlyConfig = [
		{
			priceTitle: "Starter",
			priceDescription: "Relevant for one user.",
			price: "$190",
			interval: "year",
			features: [
				"Individual configuration",
				"No setup, or hidden fees",
				"Team size: 5 developers",
				"Premium support: 12 months",
				"Free updates: 12 months",
			],
		},
		{
			priceTitle: "Company",
			priceDescription:
				"Relevant for multiple users, extended & premium support",
			price: "$990",
			interval: "year",
			features: [
				"Individual configuration",
				"No setup, or hidden fees",
				"Team size: 10 developers",
				"Premium support: 24 months",
				"Free updates: 24 months",
			],
		},
		{
			priceTitle: "Enterprise",
			priceDescription:
				"Best for large scale uses and extended redistribution rights.",
			price: "$4990",
			interval: "year",
			features: [
				"Individual configuration",
				"No setup, or hidden fees",
				"Team size: 100+ developers",
				"Premium support: 36 months",
				"Free updates: 36 months",
			],
		},
	];
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						Designed for business teams like yours
					</h2>
					<p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
						Here at Flowbite we focus on markets where technology,
						innovation, and capital can unlock long-term value and
						drive economic growth.
					</p>
				</div>
				<Tabs defaultValue="monthly">
					<div className="flex items-center justify-center my-5">
						<TabsList>
							<TabsTrigger value="monthly">Monthly</TabsTrigger>
							<TabsTrigger value="yearly">Yearly</TabsTrigger>
						</TabsList>
					</div>
					<TabsContent value="monthly">
						<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
							{/* Pricing Card */}
							{monthlyConfig.map((item) => (
								<PricingCard
									key={item.price}
									description={item.priceDescription}
									price={item.price}
									interval={item.interval}
									features={item.features}
								>
									{item.priceTitle}
								</PricingCard>
							))}
						</div>
					</TabsContent>
					<TabsContent value="yearly">
						<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
							{/* Pricing Card */}
							{yearlyConfig.map((item) => (
								<PricingCard
									key={item.price}
									description={item.priceDescription}
									price={item.price}
									interval={item.interval}
									features={item.features}
								>
									{item.priceTitle}
								</PricingCard>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</section>
	);
};

export default Pricing;
