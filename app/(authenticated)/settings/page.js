"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft, PlusCircle, Upload } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { toast } from "react-toastify";
import ProfileUpdateForm from "@/components/forms/ProfileUpdateForm";
import NotificationPreferenceForm from "@/components/forms/NotificationPreferenceForm";

function Page({ params }) {
	const { productId } = params;
	console.log(productId);
	const router = useRouter();

	const handleSubmit = () => {
		router.back();
		toast.success("Form submitted successfully");
	};
	return (
		<main className="grid flex-1 mb-6 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
			<div className="mx-auto grid w-full xl:max-w-[59rem] flex-1 auto-rows-max gap-4">
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
						Settings
					</h1>
				</div>
				<div className="grid gap-4">
					<div className="grid auto-rows-max gap-4 lg:col-span-3 lg:gap-8">
						<Card x-chunk="dashboard-07-chunk-0">
							<CardHeader>
								<CardTitle>Profile Details</CardTitle>
								<CardDescription>
									Update your profile settings
								</CardDescription>
							</CardHeader>
							<CardContent>
								<ProfileUpdateForm />
							</CardContent>
						</Card>
						<Card x-chunk="dashboard-07-chunk-1">
							<CardHeader>
								<CardTitle>Notification preference</CardTitle>
								<CardDescription>
									Lipsum dolor sit amet, consectetur
									adipiscing elit
								</CardDescription>
							</CardHeader>
							<CardContent>
								<NotificationPreferenceForm />
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</main>
	);
}

export default Page;
