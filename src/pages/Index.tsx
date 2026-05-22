import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServiceCategories from "@/components/ServiceCategories";
import FeaturesSection from "@/components/FeaturesSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to hash on initial load or navigation
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <div id="home" className="min-h-screen bg-background">
      <SEO
        title="Empowering Communities"
        description="Join Samaj Seva AI to connect, support, and uplift communities through technology-driven social service initiatives."
        keywords={["social service", "community welfare", "NGO", "volunteer", "charity", "AI for good"]}
      />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServiceCategories />
        <HowItWorks />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
