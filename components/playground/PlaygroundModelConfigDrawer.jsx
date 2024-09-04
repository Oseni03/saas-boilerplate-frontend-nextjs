import { Settings } from "lucide-react";
import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import ModelConfigForm from "../forms/ModelConfigForm";

function PlaygroundModelConfigDrawer() {
	return (
		<Drawer>
			<DrawerTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="lg:hidden text-white"
				>
					<Settings className="size-4" />
					<span className="sr-only">Settings</span>
				</Button>
			</DrawerTrigger>
			<DrawerContent className="max-h-[80vh]">
				<DrawerHeader>
					<DrawerTitle>Configuration</DrawerTitle>
					<DrawerDescription>
						Configure the settings for the model and messages.
					</DrawerDescription>
				</DrawerHeader>
				<ModelConfigForm />
			</DrawerContent>
		</Drawer>
	);
}

export default PlaygroundModelConfigDrawer;
