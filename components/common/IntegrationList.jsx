import IntegrationCard from "./IntegrationCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { PlusCircle } from "lucide-react";

const IntegrationList = () => {
	const integrations = [
		{
			id: 1,
			title: "Linear + Intercom",
			iconSrc: "/path-to-linear-icon.png",
			updatedDate: "May 22, 2022",
			author: "Frankie Sullivan",
			active: true,
		},
		{
			id: 2,
			title: "Mailchimp + Typeform",
			iconSrc: "/path-to-mailchimp-icon.png",
			updatedDate: "May 20, 2022",
			author: "Frankie Sullivan",
			active: false,
		},
		{
			id: 2,
			title: "Stripe",
			iconSrc: "/path-to-mailchimp-icon.png",
			updatedDate: "May 20, 2022",
			author: "Frankie Sullivan",
			active: false,
		},
		{
			id: 2,
			title: "QuickBooks",
			iconSrc: "/path-to-mailchimp-icon.png",
			updatedDate: "May 20, 2022",
			author: "Frankie Sullivan",
			active: false,
		},
		// Add more integrations here...
	];

	return (
		<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<div className="container mx-auto p-4">
				<h2 className="text-2xl font-bold mb-4">
					Integrations and workflows
				</h2>
				<p className="text-gray-600 mb-8">
					Supercharge your workflow and handle repetitive tasks in the
					apps you use every day.
				</p>
				<Tabs defaultValue="all">
					<div className="flex items-center">
						<TabsList>
							<TabsTrigger value="all">All</TabsTrigger>
							<TabsTrigger value="active">Active</TabsTrigger>
							<TabsTrigger value="inactive">Inactive</TabsTrigger>
							<TabsTrigger
								value="archived"
								className="hidden sm:flex"
							>
								Archived
							</TabsTrigger>
						</TabsList>
					</div>
					<TabsContent value="all">
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
							{integrations.map((integration) => (
								<IntegrationCard
									key={integration.id}
									integration={integration}
								/>
							))}
						</div>
					</TabsContent>
				</Tabs>
			</div>
		</main>
	);
};

export default IntegrationList;
