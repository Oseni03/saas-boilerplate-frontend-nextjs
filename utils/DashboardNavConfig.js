import {
	Home,
	LineChart,
	Link,
	ListCheckIcon,
	MessageCircleIcon,
	Package,
	ShoppingCart,
	Users,
	Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DashboardNavConfig({ iconClassName }) {
	const linksConfig = [
		{
			href: "/dashboard",
			children: (
				<>
					<Home className={iconClassName} />
					Dashboard
				</>
			),
		},
		{
			href: "#",
			children: (
				<>
					<ShoppingCart className={iconClassName} />
					Orders
					<Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
						6
					</Badge>
				</>
			),
		},
		{
			href: "/products",
			children: (
				<>
					<Package className={iconClassName} />
					Products{" "}
				</>
			),
		},
		{
			href: "/customers",
			children: (
				<>
					<Users className={iconClassName} />
					Customers
				</>
			),
		},
		{
			href: "/analytics",
			children: (
				<>
					<LineChart className={iconClassName} />
					Analytics
				</>
			),
		},
		{
			href: "/playground",
			children: (
				<>
					<MessageCircleIcon className={iconClassName} />
					Playground
				</>
			),
		},
		{
			href: "/integrations",
			children: (
				<>
					<Link className={iconClassName} />
					Integrations
				</>
			),
		},
		{
			href: "/tasks",
			children: (
				<>
					<ListCheckIcon className={iconClassName} />
					Tasks
				</>
			),
		},
	];
	return linksConfig;
}
