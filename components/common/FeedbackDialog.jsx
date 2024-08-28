"use client";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";
import useCreateFeedback from "@/hooks/use-create-feedback";
import Spinner from "./Spinner";

export default function FeedbackDialog({ children }) {
	const { rating, title, message, isLoading, onChange, onSelect, onSubmit } =
		useCreateFeedback();
	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="max-w-[725px]">
				<DialogHeader>
					<DialogTitle className="text-2xl text-center text-primary">
						What do you think?
					</DialogTitle>
					<DialogDescription className="text-center">
						Make changes to your profile here. Click save when
						you're done.
					</DialogDescription>
				</DialogHeader>
				<form className="space-y-4" onSubmit={onSubmit}>
					<div className="space-y-2">
						<Label htmlFor="title">Title</Label>
						<Input
							id="title"
							type="text"
							name="title"
							value={title}
							onChange={onChange}
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="message">Description</Label>
						<Textarea
							id="message"
							name="message"
							onChange={onChange}
							value={message}
							placeholder="tell us what you think"
							className="min-h-[100px]"
						/>
					</div>
					<div className="flex items-center gap-2">
						{[...Array(5)].map((_, index) => (
							<Star
								key={index}
								className={`h-7 w-7 cursor-pointer ${
									rating > index
										? "fill-primary"
										: "fill-muted stroke-muted-foreground"
								}`}
								onClick={() => onSelect(index)}
							/>
						))}
					</div>
					<Button type="submit" disabled={isLoading}>
						{isLoading ? <Spinner /> : "Submit"}
					</Button>
				</form>
			</DialogContent>
		</Dialog>
	);
}
