import React from "react";

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

					<div className="mt-8 flex flex-wrap justify-center gap-4">
						<a
							className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-destructive focus:outline-none focus:ring active:bg-primary sm:w-auto"
							href="#"
						>
							Get Started
						</a>

						<a
							className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-transparent bg-clip-text bg-primary sm:w-auto"
							href="#"
						>
							Learn More
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
