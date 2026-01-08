import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StarsBackground from "@/components/layout/StarsBackground";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedCapsules from "@/components/home/FeaturedCapsules";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StarsBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <HowItWorks />
        <FeaturedCapsules />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
