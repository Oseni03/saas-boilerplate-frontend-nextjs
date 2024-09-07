"use client";
import { useRetrieveThirdpartiesQuery } from "@/redux/features/integrationApiSlice";
import IntegrationCard from "./IntegrationCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Loading from "./Loading";

const IntegrationList = () => {
	const {
		data: allThridparties,
		isLoading,
		isError,
	} = useRetrieveThirdpartiesQuery();

	if (isLoading) {
		return <Loading />;
	}

	let activeThirdparties = [];
	let inactiveThirdparties = [];

	allThridparties.forEach((item) => {
		if (item.is_connected) {
			activeThirdparties.push(item);
		} else {
			inactiveThirdparties.push(item);
		}
	});

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
							{allThridparties.map((thirdparty) => (
								<IntegrationCard
									key={thirdparty.id}
									thirdparty={thirdparty}
								/>
							))}
						</div>
					</TabsContent>
					<TabsContent value="active">
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
							{activeThirdparties.map((thirdparty) => (
								<IntegrationCard
									key={thirdparty.id}
									thirdparty={thirdparty}
								/>
							))}
						</div>
					</TabsContent>
					<TabsContent value="inactive">
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
							{inactiveThirdparties.map((thirdparty) => (
								<IntegrationCard
									key={thirdparty.id}
									thirdparty={thirdparty}
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
