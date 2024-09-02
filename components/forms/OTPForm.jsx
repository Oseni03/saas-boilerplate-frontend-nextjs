import { Button } from "@/components/ui/button";
import Spinner from "@/components/common/Spinner";
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot,
} from "@/components/ui/input-otp";

function OTPForm({ name, value, isLoading, onChange, onSubmit }) {
	return (
		<form
			onSubmit={onSubmit}
			className="flex flex-col space-y-4 md:space-y-6 mb-3 justify-center"
		>
			<InputOTP
				name={name}
				maxLength={6}
				value={value}
				onChange={onChange}
			>
				<InputOTPGroup>
					<InputOTPSlot index={0} />
					<InputOTPSlot index={1} />
					<InputOTPSlot index={2} />
				</InputOTPGroup>
				<InputOTPSeparator />
				<InputOTPGroup>
					<InputOTPSlot index={3} />
					<InputOTPSlot index={4} />
					<InputOTPSlot index={5} />
				</InputOTPGroup>
			</InputOTP>
			<Button type="submit" className="w-full" disabled={isLoading}>
				{isLoading ? <Spinner /> : `Verify`}
			</Button>
		</form>
	);
}

export default OTPForm;
