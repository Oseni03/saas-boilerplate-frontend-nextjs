"use client";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { useEnable2FAAuthMutation } from "@/redux/features/settingsApiSlice";
import useVerifyOTP from "@/hooks/use-verify-otp";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/common/Spinner";

function Page() {
	const [enable2FAAuth] = useEnable2FAAuthMutation();
	const [qrImage, setQrImage] = useState();
	const [secret, setSecret] = useState();
	const { otp_token, isLoading, onChange, onSubmit } = useVerifyOTP();

	const generate2FAQRCode = () => {
		enable2FAAuth()
			.unwrap()
			.then((resp) => {
				const { base32, otpauth_url } = resp;
				QRCode.toDataURL(otpauth_url).then((data) => {
					console.log(data);
					setQrImage(data);
				});
				setSecret(base32);
			});
	};

	useEffect(() => {
		generate2FAQRCode();
	}, []);

	return (
		<div className="flex justify-end w-full">
			<div className="container mx-auto p-4">
				<div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
					<div className="flex flex-1 justify-center items-center p-4 text-white rounded-md">
						{qrImage && (
							<img
								src={qrImage}
								alt="2FA QR Code"
								className="rounded-lg border-2"
							/>
						)}
					</div>

					<div className="flex-1 p-4 text-white rounded-md">
						<p className="text-2xl text-gray-700 font-bold mb-4">
							Use an Authenticator App to enable 2FA
						</p>
						<ul className="list-none list-inside mb-4 text-gray-700">
							<li className="mb-2">
								<span className="font-bold">Step 1:</span> Scan
								the QR Code with your Authenticator app.
							</li>
							<li className="mb-2">
								<span className="font-bold">Step 2:</span> Enter
								the code below from your app.
							</li>
						</ul>
						<form
							onSubmit={onSubmit}
							className="space-y-4 md:space-y-6 mb-3"
						>
							<Input
								type="text"
								className="w-full"
								value={otp_token}
								onChange={onChange}
							/>
							<Button
								type="submit"
								className="w-full"
								disabled={isLoading}
							>
								{isLoading ? <Spinner /> : `Verify`}
							</Button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;
