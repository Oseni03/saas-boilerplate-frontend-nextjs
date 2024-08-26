import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks";

function ProfileUpdateForm() {
	const user = useAppSelector((state) => state.user.user);
	console.log(user);

	return (
		<form>
			<div className="grid gap-6">
				<div className="grid gap-3">
					<Label htmlFor="email">Email</Label>
					<Input
						id="email"
						type="text"
						className="w-full"
						defaultValue={user?.email}
						disabled
					/>
				</div>
				<div className="grid gap-3">
					<Label htmlFor="first_name">First name</Label>
					<Input
						id="first_name"
						type="text"
						className="w-full"
						defaultValue={user?.first_name}
					/>
				</div>
				<div className="grid gap-3">
					<Label htmlFor="last_name">Last name</Label>
					<Input
						id="last_name"
						type="text"
						className="w-full"
						defaultValue={user?.last_name}
					/>
				</div>
				<div className="grid gap-3">
					<Label htmlFor="phone_number">Phone number</Label>
					<Input
						id="phone_number"
						type="text"
						className="w-full"
						defaultValue={user?.phone_number}
					/>
				</div>
				<div className="flex justify-end">
					<Button>Update</Button>
				</div>
			</div>
		</form>
	);
}

export default ProfileUpdateForm;
