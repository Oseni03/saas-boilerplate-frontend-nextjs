import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	ArrowPathIcon,
} from "@heroicons/react/20/solid";
import {
	ArrowPathIcon as ArrowPathIconOutline,
	ChartPieIcon as ChartPieIconOutline,
	CursorArrowRaysIcon as CursorArrowRaysIconOutline,
	FingerPrintIcon as FingerPrintIconOutline,
	SquaresPlusIcon as SquaresPlusIconOutline,
} from "@heroicons/react/24/outline";

export const siteConfig = {
	name: "SaaSy",
	description:
		"Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
	mainNav: [
		{
			trigger: (
				<>
					Product
					<ChevronDownIcon
						aria-hidden="true"
						className="h-5 w-5 flex-none text-gray-400"
					/>
				</>
			),
			dropdownItems: [
				{
					name: "Analytics",
					description: "Get a better understanding of your traffic",
					href: "#",
					icon: ChartPieIcon,
				},
				{
					name: "Engagement",
					description: "Speak directly to your customers",
					href: "#",
					icon: CursorArrowRaysIcon,
				},
				{
					name: "Security",
					description: "Your customers’ data will be safe and secure",
					href: "#",
					icon: FingerPrintIcon,
				},
				{
					name: "Integrations",
					description: "Connect with third-party tools",
					href: "#",
					icon: SquaresPlusIcon,
				},
				{
					name: "Automations",
					description: "Build strategic funnels that will convert",
					href: "#",
					icon: ArrowPathIcon,
				},
			],
			footerItems: [
				{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
				{ name: "Contact sales", href: "#", icon: PhoneIcon },
			],
		},
		{
			href: "/#features",
			className: "text-sm font-semibold leading-6 text-gray-900",
			children: "Features",
		},
		{
			href: "#",
			className: "text-sm font-semibold leading-6 text-gray-900",
			children: "Marketplace",
		},
		{
			href: "#",
			className: "text-sm font-semibold leading-6 text-gray-900",
			children: "About us",
		},
		{
			href: "/#pricing",
			className: "text-sm font-semibold leading-6 text-gray-900",
			children: "Pricing",
		},
	],
	sideBarNav: {
		products: [
			{
				name: "products",
				dropDowns: [
					{
						name: "Analytics",
						description:
							"Get a better understanding of your traffic",
						href: "#",
						icon: ChartPieIconOutline,
					},
					{
						name: "Engagement",
						description: "Speak directly to your customers",
						href: "#",
						icon: CursorArrowRaysIconOutline,
					},
					{
						name: "Security",
						description:
							"Your customers’ data will be safe and secure",
						href: "#",
						icon: FingerPrintIconOutline,
					},
					{
						name: "Integrations",
						description: "Connect with third-party tools",
						href: "#",
						icon: SquaresPlusIconOutline,
					},
					{
						name: "Automations",
						description:
							"Build strategic funnels that will convert",
						href: "#",
						icon: ArrowPathIconOutline,
					},
					{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
					{ name: "Contact sales", href: "#", icon: PhoneIcon },
				],
			},
		],
		generals: [
			{ name: "Feaures", href: "/#features" },
			{ name: "Marketplace", href: "" },
			{ name: "About us", href: "" },
			{ name: "pricing", href: "/#pricing" },
		],
	},
	testimonials: [
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
	],
	links: {
		twitter: "https://twitter.com/shadcn",
		github: "https://github.com/shadcn/ui",
		docs: "https://ui.shadcn.com",
		login: "/auth/login",
		loginRedirect: "/dashboard",
		passwordResetSuccessful: "/auth/login",
		passwordResetRedirect: "/auth/login",
		registrationRedirect: "/auth/login",
	},
};
