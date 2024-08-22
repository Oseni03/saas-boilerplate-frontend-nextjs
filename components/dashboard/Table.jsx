import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

function MyTable({ config }) {
	const { headers, rows } = config;
	return (
		<Table>
			<TableHeader>
				<TableRow>
					{headers.map((head, index) => (
						<TableHead key={index} className={head.className}>
							{head.headerText}
						</TableHead>
					))}
				</TableRow>
			</TableHeader>
			<TableBody>
				{rows.map((row, index) => (
					<TableRow key={index} className="bg-accent">
						{row.map((cell, index) => (
							<TableCell key={index} className={cell.className}>
								{cell.content}
							</TableCell>
						))}
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default MyTable;
