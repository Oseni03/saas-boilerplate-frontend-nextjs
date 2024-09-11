"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";

function ProductHeader() {
	const router = useRouter();

	const handleSubmit = () => {
		router.back();
		toast.success("Form submitted successfully");
	};

	return (
		<div className="flex items-center gap-4">
			<Button
				variant="outline"
				size="icon"
				className="h-7 w-7"
				onClick={() => router.back()}
			>
				<ChevronLeft className="h-4 w-4" />
				<span className="sr-only">Back</span>
			</Button>
			<h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
				Pro Controller
			</h1>
			<Badge variant="outline" className="ml-auto sm:ml-0">
				In stock
			</Badge>
			<div className="hidden items-center gap-2 md:ml-auto md:flex">
				<Button
					variant="outline"
					size="sm"
					onClick={() => router.back()}
				>
					Discard
				</Button>
				<Button size="sm" onClick={handleSubmit}>
					Save Product
				</Button>
			</div>
		</div>
	);
}

export default ProductHeader;
