"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PricingCard from "./PricingCard";
import { useRetrievePricesQuery } from "@/redux/features/subscriptionApiSlice";

const monthly = "month";
const yearly = "year";

const DUMMY_MONTHLY_CONFIG = [
	{
		subscription_name: "Starter",
		subscription_subtitle: "Relevant for one user.",
		currency: "usd",
		interval: "month",
		features: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 5 developers",
			"Premium support: 12 months",
			"Free updates: 12 months",
		],
		trial_period_days: 7,
		amount: "19",
		interval_display: "monthly",
	},
	{
		subscription_name: "Company",
		subscription_subtitle:
			"Relevant for multiple users, extended & premium support",
		currency: "usd",
		interval: "month",
		features: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 10 developers",
			"Premium support: 24 months",
			"Free updates: 24 months",
		],
		trial_period_days: 0,
		amount: "99",
		interval_display: "monthly",
	},
	{
		subscription_name: "Enterprise",
		subscription_subtitle:
			"Best for large scale uses and extended redistribution rights.",
		currency: "usd",
		interval: "month",
		features: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 10 developers",
			"Premium support: 24 months",
			"Free updates: 24 months",
		],
		trial_period_days: 0,
		amount: "499",
		interval_display: "monthly",
	},
];

const DUMMY_YEARLY_CONFIG = [
	{
		subscription_name: "Starter",
		subscription_subtitle: "Relevant for one user.",
		currency: "usd",
		interval: "year",
		features: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 100+ developers",
			"Premium support: 36 months",
			"Free updates: 36 months",
		],
		trial_period_days: 7,
		amount: "190",
		interval_display: "yearly",
	},
	{
		subscription_name: "Company",
		subscription_subtitle:
			"Relevant for multiple users, extended & premium support",
		currency: "usd",
		interval: "year",
		features: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 100+ developers",
			"Premium support: 36 months",
			"Free updates: 36 months",
		],
		trial_period_days: 0,
		amount: "990",
		interval_display: "yearly",
	},
	{
		subscription_name: "Enterprise",
		subscription_subtitle:
			"Best for large scale uses and extended redistribution rights.",
		currency: "usd",
		interval: "year",
		features: [
			"Individual configuration",
			"No setup, or hidden fees",
			"Team size: 100+ developers",
			"Premium support: 36 months",
			"Free updates: 36 months",
		],
		trial_period_days: 0,
		amount: "4990",
		interval_display: "yearly",
	},
];

const Pricing = () => {
	const { monthlyResp } = useRetrievePricesQuery({ interval: monthly });
	console.log(monthlyResp);

	const { yearlyResp } = useRetrievePricesQuery({ interval: yearly });
	console.log(yearlyResp);

	let monthlyConfig = [];
	let yearlyConfig = [];

	if (monthlyResp) {
		monthlyConfig = monthlyResp;
	} else {
		monthlyConfig = DUMMY_MONTHLY_CONFIG;
	}

	if (yearlyResp) {
		yearlyConfig = yearlyResp;
	} else {
		yearlyConfig = DUMMY_YEARLY_CONFIG;
	}

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
									subscription_subtitle={
										item.subscription_subtitle
									}
									amount={item.amount}
									interval={item.interval}
									features={item.features}
									currency={item.currency}
									trial_period_days={item.trial_period_days}
									interval_display={item.interval_display}
									price_id="cytvubyiq"
								>
									{item.subscription_name}
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
									subscription_subtitle={
										item.subscription_subtitle
									}
									amount={item.amount}
									interval={item.interval}
									features={item.features}
									currency={item.currency}
									trial_period_days={item.trial_period_days}
									interval_display={item.interval_display}
								>
									{item.subscription_name}
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
