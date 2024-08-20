import React from "react";

const testimonials = [
	{
		name: "Bonnie Green",
		role: "Developer at Open AI",
		testimonial: `I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme. Flowbite has code in one place and I'm not joking when I say it took me a matter of minutes to copy the code, customise it and integrate within a Laravel + Vue application. If you care for your time, I hands down would go with this.`,
		image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
		title: "Speechless with how easy this was to integrate",
	},
	{
		name: "Roberta Casas",
		role: "Lead designer at Dropbox",
		testimonial: `FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project. Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!`,
		image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
		title: "Solid foundation for any project",
	},
	{
		name: "Jese Leos",
		role: "Software Engineer at Facebook",
		testimonial: `As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯. Everything is so well structured and simple to use (I've learnt so much about Figma by just using the toolkit). Aesthetically, the well-designed components are beautiful and will undoubtedly level up your next application.`,
		image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
		title: "Mindblowing workflow and variants",
	},
	{
		name: "Joseph McFall",
		role: "CTO at Google",
		testimonial: `This is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind. You have many examples that can be used to create a fast prototype for your team.`,
		image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
		title: "Efficient Collaborating",
	},
];

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
					{testimonials.map((testimonial, index) => (
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
