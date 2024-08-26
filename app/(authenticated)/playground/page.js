import { Share } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ModelConfigurationForm from "@/components/forms/ModelConfigurationForm";
import PlaygroundChatForm from "@/components/forms/PlaygroundChatForm";
import PlaygroundModelConfigDrawer from "@/components/playground/PlaygroundModelConfigDrawer";

export const metadata = {
	title: "Playground - Boilerplate",
	description: "Boilerplate playground page",
};

export default function Page() {
	return (
		<>
			<div className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
				<h1 className="text-xl font-semibold">Playground</h1>
				<PlaygroundModelConfigDrawer />
				<Button
					variant="outline"
					size="sm"
					className="ml-auto gap-1.5 text-sm"
				>
					<Share className="size-3.5" />
					Share
				</Button>
			</div>
			<main className="grid flex-1 gap-4 overflow-auto p-4 md:grid-cols-2 lg:grid-cols-3">
				<div
					className="relative hidden flex-col items-start gap-8 lg:flex"
					x-chunk="dashboard-03-chunk-0"
				>
					<ModelConfigurationForm />
				</div>
				<div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 md:col-span-2">
					<Badge variant="outline" className="absolute right-3 top-3">
						Output
					</Badge>
					<div className="flex-1" />
					<PlaygroundChatForm />
				</div>
			</main>
		</>
	);
}
