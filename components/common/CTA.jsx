import Link from "next/link";
import React from "react";

function CTA() {
	return (
		<section className="bg-gray-900 text-white" id="CTA">
			<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm text-center">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-white dark:text-white">
						Start your free trial today
					</h2>
					<p className="mb-6 font-light text-white dark:text-gray-400 md:text-lg">
						Try Flowbite Platform for 30 days. No credit card
						required.
					</p>
					<Link
						href="/auth/register"
						className="text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-primary font-bold rounded-lg text-lg px-5 py-3 mr-2 mb-2 dark:bg-primary dark:hover:bg-primary focus:outline-none dark:focus:ring-primary"
					>
						Free trial for 7 days
					</Link>
				</div>
			</div>
		</section>
	);
}

export default CTA;
