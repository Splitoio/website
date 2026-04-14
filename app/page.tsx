import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import DashboardSection from "../components/DashboardSection";
import BenefitsSection from "../components/BenefitsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      style={{
        background: "linear-gradient(0deg, #111111, #111111), #FFFFFF",
      }}
      className="min-h-screen text-white overflow-x-hidden"
    >
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <DashboardSection />
      <BenefitsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
