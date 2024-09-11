import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import useIntegrationActivation from "@/hooks/use-integration-activation";
import Spinner from "@/components/common/Spinner";

const IntegrationCard = ({ thirdparty }) => {
	const { connected, isLoading, onChange } = useIntegrationActivation(
		thirdparty.slug,
		thirdparty.integration_id,
		thirdparty.is_connected
	);

	return (
		<Card>
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle>{thirdparty.name}</CardTitle>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button
								aria-haspopup="true"
								size="icon"
								variant="ghost"
							>
								<MoreVertical className="h-4 w-4" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>Actions</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Deactivate</DropdownMenuItem>
							<DropdownMenuItem>Delete</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			</CardHeader>

			<CardContent>
				<p>{thirdparty.description}</p>
			</CardContent>
			{/* Add separator between content and footer */}
			<Separator className="my-4" />
			<CardFooter className="flex items-center justify-between">
				{/* Button aligned to the left */}
				<Button>{isLoading ? <Spinner /> : `View integration`}</Button>

				{/* Switch aligned to the right */}
				<div>
					<Switch
						disable={isLoading}
						onClick={onChange}
						checked={connected}
					/>
				</div>
			</CardFooter>
		</Card>
	);
};

export default IntegrationCard;
