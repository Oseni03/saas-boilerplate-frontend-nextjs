"use client";
import React, { useState } from "react";
import { Check, Bell, Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import {
	useMarkReadAllNotificationsMutation,
	useRetrieveNotificationsQuery,
} from "@/redux/features/notificationApiSlice";
import Spinner from "./Spinner";
import { toast } from "react-toastify";
import { ScrollArea } from "../ui/scroll-area";

function NotificationPopover({ className, ...props }) {
	const { data: notifications, isLoading } = useRetrieveNotificationsQuery();
	const [markAll, { isLoading: readLoading }] =
		useMarkReadAllNotificationsMutation();

	const [allRead, readAll] = useState(false);

	const handleMarkAll = () => {
		markAll()
			.unwrap()
			.then(() => {
				readAll(true);
				toast.success("All notification read");
			});
	};

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					size="icon"
					className="ml-auto h-8 w-8"
				>
					{isLoading ? <Spinner /> : <Bell className="h-4 w-4" />}

					<span className="sr-only">Toggle notifications</span>
				</Button>
			</PopoverTrigger>
			<PopoverContent className="sm:max-w-[425px]">
				<Card className={cn("w-[380px]", className)} {...props}>
					<CardHeader>
						<CardTitle>
							<div className="flex justify-between item-center">
								Notifications
								<Link href="/settings#notification-settings">
									<Settings />
								</Link>
							</div>
						</CardTitle>
					</CardHeader>
					<CardContent className="grid gap-4">
						<ScrollArea className="h-60">
							{notifications?.map((notification, index) => (
								<div
									key={index}
									className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
								>
									{notification.is_read || allRead ? (
										<Check className="mr-2 h-4 w-4" />
									) : (
										<span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
									)}

									<div className="space-y-1">
										<p className="text-sm font-medium leading-none">
											{notification.title}
										</p>
										<p className="text-sm text-muted-foreground">
											{notification.timesince}
										</p>
									</div>
								</div>
							))}
						</ScrollArea>
					</CardContent>
					<CardFooter>
						<Button className="w-full" onClick={handleMarkAll}>
							{readLoading ? (
								<Spinner />
							) : (
								<>
									<Check className="mr-2 h-4 w-4" /> Mark all
									as read
								</>
							)}
						</Button>
					</CardFooter>
				</Card>
			</PopoverContent>
		</Popover>
	);
}

export default NotificationPopover;
