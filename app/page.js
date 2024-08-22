import CTA from "./_components/common/CTA";
import Features from "./_components/common/Features";
import Hero from "./_components/common/Hero";
import Pricing from "./_components/common/Pricing";
import Testimonials from "./_components/common/Testimonials";

export const metadata = {
	title: "Home page - Boilerplate",
	description: "Boilerplate home page",
};

export default function Page() {
	return (
		<div>
			<Hero />
			<Features />
			<CTA />
			<Pricing />
			<Testimonials />
		</div>
	);
}
