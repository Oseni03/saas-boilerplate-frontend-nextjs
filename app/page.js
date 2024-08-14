import CompanyLogos from "./_components/CompanyLogos";
import Features from "./_components/features";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Pricing from "./_components/Pricing";
import SocialProof from "./_components/SocialProof";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <CompanyLogos/>
      <Features/>
      <SocialProof/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}
