import React from "react";
import Link from "next/link";
import Image from "next/image";
import nextImage from "@/public/next.svg";
import PasswordResetForm from "@/app/_components/forms/PasswordResetForm";

export const metadata = {
	title: "Password reset - Boilerplate",
	description: "Boilerplate password reset page",
};

function Page({ params }) {
	const { user, token } = params;
	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<Link
					href="/"
					className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
				>
					<Image
						className="w-8 h-8 mr-2"
						src={nextImage}
						alt="logo"
						width={100}
						height={100}
					/>
					Boilerplate
				</Link>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Reset password
						</h1>
						<PasswordResetForm user={user} token={token} />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Page;
