import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

function StockCard() {
	return (
		<Card x-chunk="dashboard-07-chunk-1">
			<CardHeader>
				<CardTitle>Stock</CardTitle>
				<CardDescription>
					Lipsum dolor sit amet, consectetur adipiscing elit
				</CardDescription>
			</CardHeader>
			<CardContent>
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">SKU</TableHead>
							<TableHead>Stock</TableHead>
							<TableHead>Price</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell className="font-semibold">
								GGPC-001
							</TableCell>
							<TableCell>
								<Label htmlFor="stock-1" className="sr-only">
									Stock
								</Label>
								<Input
									id="stock-1"
									type="number"
									defaultValue="100"
								/>
							</TableCell>
							<TableCell>
								<Label htmlFor="price-1" className="sr-only">
									Price
								</Label>
								<Input
									id="price-1"
									type="number"
									defaultValue="99.99"
								/>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-semibold">
								GGPC-002
							</TableCell>
							<TableCell>
								<Label htmlFor="stock-2" className="sr-only">
									Stock
								</Label>
								<Input
									id="stock-2"
									type="number"
									defaultValue="143"
								/>
							</TableCell>
							<TableCell>
								<Label htmlFor="price-2" className="sr-only">
									Price
								</Label>
								<Input
									id="price-2"
									type="number"
									defaultValue="99.99"
								/>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell className="font-semibold">
								GGPC-003
							</TableCell>
							<TableCell>
								<Label htmlFor="stock-3" className="sr-only">
									Stock
								</Label>
								<Input
									id="stock-3"
									type="number"
									defaultValue="32"
								/>
							</TableCell>
							<TableCell>
								<Label htmlFor="price-3" className="sr-only">
									Stock
								</Label>
								<Input
									id="price-3"
									type="number"
									defaultValue="99.99"
								/>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</CardContent>
			<CardFooter className="justify-center border-t p-4">
				<Button size="sm" variant="ghost" className="gap-1">
					<PlusCircle className="h-3.5 w-3.5" />
					Add Variant
				</Button>
			</CardFooter>
		</Card>
	);
}

export default StockCard;
