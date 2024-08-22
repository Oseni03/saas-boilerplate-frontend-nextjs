import React from "react";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

function BreadCrumb({ config }) {
	return (
		<Breadcrumb className="hidden md:flex">
			<BreadcrumbList>
				{config.map((item, index) =>
					item.href ? (
						<>
							<BreadcrumbItem key={index}>
								<BreadcrumbLink asChild>
									<Link href={item.href}>
										{item.labelText}
									</Link>
								</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator key={index} />
						</>
					) : (
						<BreadcrumbItem key={index}>
							<BreadcrumbPage>{item.labelText}</BreadcrumbPage>
						</BreadcrumbItem>
					)
				)}
			</BreadcrumbList>
		</Breadcrumb>
	);
}

export default BreadCrumb;
