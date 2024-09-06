import { Button } from "../ui/button";
import { Switch } from "../ui/switch";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Separator } from "../ui/separator";

const IntegrationCard = ({ integration }) => {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{integration.title}</CardTitle>
			</CardHeader>
			<CardContent>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Fugit iure maiores rerum laborum facilis ducimus nobis
					aperiam praesentium.
				</p>
			</CardContent>
			{/* Add separator between content and footer */}
			<Separator className="my-4" />
			<CardFooter className="flex items-center justify-between">
				{/* Button aligned to the left */}
				<Button>View integration</Button>

				{/* Switch aligned to the right */}
				<div>
					<Switch checked={integration.active} />
				</div>
			</CardFooter>
		</Card>
	);
};

export default IntegrationCard;
