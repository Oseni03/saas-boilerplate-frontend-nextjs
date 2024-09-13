"use client";
import Link from "next/link";
import { useResendActivationMutation } from "@/redux/features/authApiSlice";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/common/Spinner";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Page() {
	const [resend, { isLoading }] = useResendActivationMutation();
	const router = useRouter();

	const handleResend = () => {
		resend()
			.unwrap()
			.then(() => {
				toast.success("Confirmation email sent");
			})
			.catch(() => {
				toast.error("Something went wrong");
			});
	};

	return (
		<main className="grid h-svh place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="text-base font-semibold text-primary">
					Didn't get the email?
				</p>
				<h1 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
					Resend account confirmatio email
				</h1>
				<p className="mt-6 text-base leading-7 text-gray-600">
					An email has been sent to your email, kindly confirm your
					email to activate your account.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Button
						onClick={handleResend}
						disabled={isLoading}
						className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
					>
						{isLoading ? <Spinner /> : "Resend confirmation email"}
					</Button>
					<Link
						href="/auth/register"
						className="text-sm font-semibold text-gray-900"
					>
						Back
					</Link>
				</div>
			</div>
		</main>
	);
}

export default Page;
