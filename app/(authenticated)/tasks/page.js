import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";

import { columns } from "./components/columns";
import DataTable from "./components/data-table";
import { taskSchema } from "./data/schema";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const metadata = {
	title: "Tasks",
	description: "A task and issue tracker build using Tanstack Table.",
};

// Simulate a database read for tasks.
async function getTasks() {
	const data = await fs.readFile(
		path.join(process.cwd(), "app/(authenticated)/tasks/data/tasks.json")
	);

	const tasks = JSON.parse(data.toString());

	return z.array(taskSchema).parse(tasks);
}

export default async function TaskPage() {
	const tasks = await getTasks();

	return (
		<div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
			<div>
				<h2 className="text-2xl font-bold tracking-tight">
					Welcome back!
				</h2>
				<p className="text-muted-foreground">
					Here&apos;s a list of your tasks for this month!
				</p>
			</div>
			<ScrollArea class="lg:w-3/5 xl:w-full whitespace-nowrap">
				<DataTable data={tasks} columns={columns} />
				<ScrollBar orientation="horizontal" />
			</ScrollArea>
		</div>
	);
}
