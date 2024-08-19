import CompanyLogos from "./_components/common/CompanyLogos";
import CTA from "./_components/common/CTA";
import Features from "./_components/common/Features";
import Hero from "./_components/common/Hero";
import MockupHero from "./_components/common/MockupHero";
import Pricing from "./_components/common/Pricing";
import SocialProof from "./_components/common/SocialProof";
import Testimonials from "./_components/common/Testimonials";

export const metadata = {
	title: "Home page - Boilerplate",
	description: "Boilerplate home page",
};

export default function Page() {
	return (
		<div>
			<MockupHero />
			<CompanyLogos />
			<Features />
			<CTA />
			{/* <SocialProof /> */}
			<Pricing />
			<Testimonials />
		</div>
	);
}
