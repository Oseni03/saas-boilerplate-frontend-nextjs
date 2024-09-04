import React from "react";
import { Card } from "../ui/card";
import { CardHeader } from "../ui/card";
import { CardTitle } from "../ui/card";
import { CardDescription } from "../ui/card";
import { CardContent } from "../ui/card";
import { Button } from "../ui/button";

function UpgradeCard() {
	return (
		<div className="mt-auto">
			<Card>
				<CardHeader>
					<CardTitle>Upgrade to Pro</CardTitle>
					<CardDescription>
						Unlock all features and get unlimited access to our
						support team.
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Button size="sm" className="w-full text-white">
						Upgrade
					</Button>
				</CardContent>
			</Card>
		</div>
	);
}

export default UpgradeCard;
