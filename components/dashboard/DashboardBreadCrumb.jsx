import React from "react";
import BreadCrumb from "./BreadCrumb";

function DashboardBreadCrumb() {
	const breadcrumbConfig = [
		{
			href: "#",
			labelText: "Dashboard",
		},
		{
			href: "#",
			labelText: "Orders",
		},
		{
			labelText: "Recent Orders",
		},
	];
	return <BreadCrumb config={breadcrumbConfig} />;
}

export default DashboardBreadCrumb;
