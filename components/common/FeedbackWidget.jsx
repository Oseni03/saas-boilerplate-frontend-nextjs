import React from "react";
import { Button } from "../ui/button";
import FeedbackDialog from "./FeedbackDialog";
import { ThemeDropdownMenu } from "./ThemeDropdownMenu";

function FeedbackWidget() {
	return (
		<div className="fixed bottom-4 right-4 z-50">
			<div className="flex gap-2 items-center">
				<ThemeDropdownMenu />
				<FeedbackDialog>
					<Button className="rounded-full shadow-lg hover:scale-105 text-white">
						Feedback
					</Button>
				</FeedbackDialog>
			</div>
		</div>
	);
}

export default FeedbackWidget;
