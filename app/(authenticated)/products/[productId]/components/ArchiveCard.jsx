import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MyAlertDialog } from "@/components/common/AlertDialog";

function ArchiveCard() {
	return (
		<Card x-chunk="dashboard-07-chunk-5">
			<CardHeader>
				<CardTitle>Archive Product</CardTitle>
				<CardDescription>
					Lipsum dolor sit amet, consectetur adipiscing elit.
				</CardDescription>
			</CardHeader>
			<CardContent>
				<div></div>
				<MyAlertDialog
					dialogTitle="Archive product"
					dialogDescription="Are you sure you want to archive this product? Can be changed later."
				>
					<Button size="sm" variant="secondary">
						Archive Product
					</Button>
				</MyAlertDialog>
			</CardContent>
		</Card>
	);
}

export default ArchiveCard;
