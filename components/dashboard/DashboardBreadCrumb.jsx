import React from "react";
import BreadCrumb from "../common/BreadCrumb";

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

function DashboardBreadCrumb() {
	return <BreadCrumb config={breadcrumbConfig} />;
}

export default DashboardBreadCrumb;
