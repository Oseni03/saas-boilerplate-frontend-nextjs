import { Button } from "@/components/ui/button";
import ArchiveCard from "./components/ArchiveCard";
import ProductDetailCard from "./components/ProductDetailCard";
import StockCard from "./components/StockCard";
import ProductCategoryCard from "./components/ProductCategoryCard";
import ProductStatusCard from "./components/ProductStatusCard";
import ProductImageCard from "./components/ProductImageCard";
import ProductHeader from "./components/ProductHeader";

export const metadata = {
	title: "Product detail - Boilerplate",
	description: "Boilerplate product detail page",
};

function Page({ params }) {
	const { productId } = params;
	console.log(productId);

	return (
		<main className="grid flex-1 mb-6 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
				<ProductHeader />
				<div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
					<div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
						<ProductDetailCard />
						<StockCard />
						<ProductCategoryCard />
					</div>
					<div className="grid auto-rows-max items-start gap-4 lg:gap-8">
						<ProductStatusCard />
						<ProductImageCard />
						<ArchiveCard />
					</div>
				</div>
				<div className="flex items-center justify-center gap-2 md:hidden">
					<Button variant="outline" size="sm">
						Discard
					</Button>
					<Button size="sm">Save Product</Button>
				</div>
			</div>
		</main>
	);
}

export default Page;
