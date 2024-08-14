import CompanyLogos from "./_components/CompanyLogos";
import Features from "./_components/features";
import Hero from "./_components/Hero";
import Pricing from "./_components/Pricing";
import SocialProof from "./_components/SocialProof";

export default function Home() {
  return (
    <div>
      <Hero/>
      <CompanyLogos/>
      <Features/>
      <SocialProof/>
      <Pricing/>
    </div>
  );
}
