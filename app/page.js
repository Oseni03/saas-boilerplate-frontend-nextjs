import CTA from "../components/common/CTA";
import Features from "../components/common/Features";
import Hero from "../components/common/Hero";
import Pricing from "../components/common/Pricing";
import Testimonials from "../components/common/Testimonials";

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
