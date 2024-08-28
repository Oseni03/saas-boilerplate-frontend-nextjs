"use client";
import { useAppSelector } from "@/redux/hooks";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import FeedbackForm from "../forms/FeedbackForm";
import SupportForm from "../forms/SupportForm";

export default function FeedbackDialog({ children }) {
	const { isAuthenticated } = useAppSelector((state) => state.auth);
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="max-w-[725px]">
				<DialogHeader>
					<DialogTitle className="text-2xl text-center text-primary">
						Have an issue or a suggestion?
					</DialogTitle>
					<DialogDescription className="text-center">
						Notify us any issue or suggestion you have to better
						serve you.
					</DialogDescription>
				</DialogHeader>
				{isAuthenticated ? <FeedbackForm /> : <SupportForm />}
			</DialogContent>
		</Dialog>
	);
}
