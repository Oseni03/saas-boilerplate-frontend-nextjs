import React from "react";
import ShimmerButton from "@/components/magicui/shimmer-button";

function Hero() {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
				<div className="mx-auto max-w-xl text-center">
					<h1 className="text-5xl font-extrabold sm:text-5xl">
						Create your Form
						<span class="text-primary bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
							{" "}
							In Seconds Not in Hours.{" "}
						</span>
					</h1>

					<p className="mt-4 sm:text-xl/relaxed">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nesciunt illo tenetur fuga ducimus numquam ea!
					</p>

					<div className="z-10 flex min-h-[16rem] items-center justify-center">
						<ShimmerButton className="shadow-2xl">
							<span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 md:text-xl lg:text-3xl">
								Get started
							</span>
						</ShimmerButton>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
