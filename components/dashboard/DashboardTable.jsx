import MyTable from "./Table";
import { Badge } from "@/components/ui/badge";

import React from "react";

function DashboardTable() {
	const tableConfig = {
		headers: [
			{
				headerText: "Customer",
				className: "",
			},
			{
				headerText: "Type",
				className: "hidden sm:table-cell",
			},
			{
				headerText: "Status",
				className: "hidden sm:table-cell",
			},
			{
				headerText: "Date",
				className: "hidden md:table-cell",
			},
			{
				headerText: "Amount",
				className: "text-right",
			},
		],
		rows: [
			[
				{
					className: "",
					content: (
						<>
							<div className="font-medium">Olivia Smith</div>
							<div className="hidden text-sm text-muted-foreground md:inline">
								olivia@example.com
							</div>
						</>
					),
				},
				{
					className: "hidden sm:table-cell",
					content: "Refund",
				},
				{
					className: "hidden sm:table-cell",
					content: (
						<>
							<Badge className="text-xs" variant="outline">
								Declined
							</Badge>
						</>
					),
				},
				{
					className: "hidden md:table-cell",
					content: "2023-06-24",
				},
				{
					className: "text-right",
					content: "$150.00",
				},
			],
			[
				{
					className: "",
					content: (
						<>
							<div className="font-medium">Olivia Smith</div>
							<div className="hidden text-sm text-muted-foreground md:inline">
								olivia@example.com
							</div>
						</>
					),
				},
				{
					className: "hidden sm:table-cell",
					content: "Refund",
				},
				{
					className: "hidden sm:table-cell",
					content: (
						<>
							<Badge className="text-xs" variant="outline">
								Declined
							</Badge>
						</>
					),
				},
				{
					className: "hidden md:table-cell",
					content: "2023-06-24",
				},
				{
					className: "text-right",
					content: "$150.00",
				},
			],
			[
				{
					className: "",
					content: (
						<>
							<div className="font-medium">Olivia Smith</div>
							<div className="hidden text-sm text-muted-foreground md:inline">
								olivia@example.com
							</div>
						</>
					),
				},
				{
					className: "hidden sm:table-cell",
					content: "Refund",
				},
				{
					className: "hidden sm:table-cell",
					content: (
						<>
							<Badge className="text-xs" variant="outline">
								Declined
							</Badge>
						</>
					),
				},
				{
					className: "hidden md:table-cell",
					content: "2023-06-24",
				},
				{
					className: "text-right",
					content: "$150.00",
				},
			],
			[
				{
					className: "",
					content: (
						<>
							<div className="font-medium">Olivia Smith</div>
							<div className="hidden text-sm text-muted-foreground md:inline">
								olivia@example.com
							</div>
						</>
					),
				},
				{
					className: "hidden sm:table-cell",
					content: "Refund",
				},
				{
					className: "hidden sm:table-cell",
					content: (
						<>
							<Badge className="text-xs" variant="outline">
								Declined
							</Badge>
						</>
					),
				},
				{
					className: "hidden md:table-cell",
					content: "2023-06-24",
				},
				{
					className: "text-right",
					content: "$150.00",
				},
			],
			[
				{
					className: "",
					content: (
						<>
							<div className="font-medium">Olivia Smith</div>
							<div className="hidden text-sm text-muted-foreground md:inline">
								olivia@example.com
							</div>
						</>
					),
				},
				{
					className: "hidden sm:table-cell",
					content: "Refund",
				},
				{
					className: "hidden sm:table-cell",
					content: (
						<>
							<Badge className="text-xs" variant="outline">
								Declined
							</Badge>
						</>
					),
				},
				{
					className: "hidden md:table-cell",
					content: "2023-06-24",
				},
				{
					className: "text-right",
					content: "$150.00",
				},
			],
			[
				{
					className: "",
					content: (
						<>
							<div className="font-medium">Olivia Smith</div>
							<div className="hidden text-sm text-muted-foreground md:inline">
								olivia@example.com
							</div>
						</>
					),
				},
				{
					className: "hidden sm:table-cell",
					content: "Refund",
				},
				{
					className: "hidden sm:table-cell",
					content: (
						<>
							<Badge className="text-xs" variant="outline">
								Declined
							</Badge>
						</>
					),
				},
				{
					className: "hidden md:table-cell",
					content: "2023-06-24",
				},
				{
					className: "text-right",
					content: "$150.00",
				},
			],
			[
				{
					className: "",
					content: (
						<>
							<div className="font-medium">Olivia Smith</div>
							<div className="hidden text-sm text-muted-foreground md:inline">
								olivia@example.com
							</div>
						</>
					),
				},
				{
					className: "hidden sm:table-cell",
					content: "Refund",
				},
				{
					className: "hidden sm:table-cell",
					content: (
						<>
							<Badge className="text-xs" variant="outline">
								Declined
							</Badge>
						</>
					),
				},
				{
					className: "hidden md:table-cell",
					content: "2023-06-24",
				},
				{
					className: "text-right",
					content: "$150.00",
				},
			],
			[
				{
					className: "",
					content: (
						<>
							<div className="font-medium">Olivia Smith</div>
							<div className="hidden text-sm text-muted-foreground md:inline">
								olivia@example.com
							</div>
						</>
					),
				},
				{
					className: "hidden sm:table-cell",
					content: "Refund",
				},
				{
					className: "hidden sm:table-cell",
					content: (
						<>
							<Badge className="text-xs" variant="outline">
								Declined
							</Badge>
						</>
					),
				},
				{
					className: "hidden md:table-cell",
					content: "2023-06-24",
				},
				{
					className: "text-right",
					content: "$150.00",
				},
			],
			[
				{
					className: "",
					content: (
						<>
							<div className="font-medium">Olivia Smith</div>
							<div className="hidden text-sm text-muted-foreground md:inline">
								olivia@example.com
							</div>
						</>
					),
				},
				{
					className: "hidden sm:table-cell",
					content: "Refund",
				},
				{
					className: "hidden sm:table-cell",
					content: (
						<>
							<Badge className="text-xs" variant="outline">
								Declined
							</Badge>
						</>
					),
				},
				{
					className: "hidden md:table-cell",
					content: "2023-06-24",
				},
				{
					className: "text-right",
					content: "$150.00",
				},
			],
		],
	};
	return <MyTable config={tableConfig} />;
}

export default DashboardTable;
