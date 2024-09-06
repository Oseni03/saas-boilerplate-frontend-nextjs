import React from "react";
import { TESTIMONIALS } from "@/utils/constants";

const Testimonials = () => {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-sm">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						Testimonials
					</h2>
					<p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
						Explore the whole collection of open-source web
						components and elements built with the utility classes
						from Tailwind
					</p>
				</div>
				<div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
					{TESTIMONIALS.map((testimonial, index) => (
						<figure
							key={index}
							className={`flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700 ${
								index % 2 === 0 ? "lg:border-r" : ""
							} ${index > 1 ? "lg:border-b-0" : ""}`}
						>
							<blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									{testimonial.title}
								</h3>
								{testimonial.testimonial
									.split("\n")
									.map((line, idx) => (
										<p key={idx} className="my-4">
											{line}
										</p>
									))}
							</blockquote>
							<figcaption className="flex justify-center items-center space-x-3">
								<img
									className="w-9 h-9 rounded-full"
									src={testimonial.image}
									alt={`${testimonial.name} profile`}
								/>
								<div className="space-y-0.5 font-medium dark:text-white text-left">
									<div>{testimonial.name}</div>
									<div className="text-sm font-light text-gray-500 dark:text-gray-400">
										{testimonial.role}
									</div>
								</div>
							</figcaption>
						</figure>
					))}
				</div>
				{/* <div className="text-center">
					<Link
						href="#"
						className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium focus:outline-none bg-primary rounded-lg border border-primary text-white"
					>
						Show more...
					</Link>
				</div> */}
			</div>
		</section>
	);
};

export default Testimonials;
