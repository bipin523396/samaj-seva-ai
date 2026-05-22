import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServiceCategories from "@/components/ServiceCategories";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  useEffect(() => {
    // Handle scroll to hash on initial load or navigation
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Empowering Communities"
        description="Join Samaj Seva AI to connect, support, and uplift communities through technology-driven social service initiatives."
        keywords={["social service", "community welfare", "NGO", "volunteer", "charity", "AI for good"]}
      />
      <Header />
      <main>
        <HeroSection />
        <ServiceCategories />
        <HowItWorks />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
