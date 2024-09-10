import Link from "next/link";
import { Bell, Package2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import DashboardNavLinks from "@/components/dashboard/DashboardNavLinks";
import NotificationPopover from "./NotificationPopover";

function SideBar() {
	return (
		<div className="hidden border-r bg-muted/40 md:block">
			<div className="flex h-full max-h-screen flex-col gap-2">
				<div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
					<Link
						href="/"
						className="flex items-center gap-2 font-semibold"
					>
						<Package2 className="h-6 w-6" />
						<span className="">Acme Inc</span>
					</Link>
					<NotificationPopover />
				</div>
				<div className="flex-1">
					<DashboardNavLinks />
				</div>
				<div className="mt-auto p-4">
					<Card x-chunk="dashboard-02-chunk-0">
						<CardHeader className="p-2 pt-0 md:p-4">
							<CardTitle>Upgrade to Pro</CardTitle>
							<CardDescription>
								Unlock all features and get unlimited access to
								our support team.
							</CardDescription>
						</CardHeader>
						<CardContent className="p-2 pt-0 md:p-4 md:pt-0">
							<Button size="sm" className="w-full">
								Upgrade
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

export default SideBar;
