import CompanyLogos from "./_components/common/CompanyLogos";
import Features from "./_components/common/Features";
import Hero from "./_components/common/Hero";
import Pricing from "./_components/common/Pricing";
import SocialProof from "./_components/common/SocialProof";
import Testimonials from "./_components/common/Testimonials";

export default function Page() {
  return (
    <div>
      <Hero/>
      <CompanyLogos/>
      <Features/>
      <SocialProof/>
      <Pricing/>
      <Testimonials/>
    </div>
  );
}
