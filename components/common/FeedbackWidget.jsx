import React from "react";
import { Button } from "../ui/button";
import FeedbackDialog from "./FeedbackDialog";

function FeedbackWidget() {
	return (
		<div className="fixed bottom-4 right-4 z-50">
			<FeedbackDialog>
				<Button className="rounded-full shadow-lg hover:scale-105">
					Feedback
				</Button>
			</FeedbackDialog>
		</div>
	);
}

export default FeedbackWidget;
