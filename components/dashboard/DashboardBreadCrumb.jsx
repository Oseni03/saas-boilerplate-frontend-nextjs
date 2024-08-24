import React from "react";
import BreadCrumb from "../common/BreadCrumb";

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
