import {
	Home,
	LineChart,
	MessageCircleIcon,
	Package,
	ShoppingCart,
	Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function NavConfig({ iconClassName }) {
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
	];
	return linksConfig;
}
