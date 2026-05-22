import { Search, Mic } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "@/components/ui/sonner";

import farmerImg from "@/assets/slides/farmer.jpg";
import studentsImg from "@/assets/slides/students.jpg";
import technologyImg from "@/assets/slides/technology.jpg";
import greeneryImg from "@/assets/slides/greenery.jpg";
import medicalImg from "@/assets/slides/medical.jpg";
import leaderImg from "@/assets/slides/leader.jpg";
import armyImg from "@/assets/slides/army.jpg";
import navyImg from "@/assets/slides/navy.jpg";
import spaceImg from "@/assets/slides/space.jpg";
import wildlifeImg from "@/assets/slides/wildlife.jpg";
import mountainsImg from "@/assets/slides/mountains.jpg";
import universityImg from "@/assets/slides/university.jpg";
import smartcityImg from "@/assets/slides/smartcity.jpg";
import industryImg from "@/assets/slides/industry.jpg";
import oceanImg from "@/assets/slides/ocean.jpg";
import railwayImg from "@/assets/slides/railway.jpg";
import womenImg from "@/assets/slides/women.jpg";
import solarImg from "@/assets/slides/solar.jpg";
import highwayImg from "@/assets/slides/highway.jpg";
import peacockImg from "@/assets/slides/peacock.jpg";
import startupImg from "@/assets/slides/startup.jpg";
import airforceImg from "@/assets/slides/airforce.jpg";
import villageImg from "@/assets/slides/village.jpg";
import heritageImg from "@/assets/slides/heritage.jpg";
import elephantsImg from "@/assets/slides/elephants.jpg";
import digitalImg from "@/assets/slides/digital.jpg";

const slides = [
  farmerImg, leaderImg, technologyImg, armyImg, studentsImg,
  greeneryImg, navyImg, medicalImg, spaceImg, wildlifeImg,
  mountainsImg, universityImg, smartcityImg, industryImg, oceanImg,
  railwayImg, womenImg, solarImg, highwayImg, peacockImg,
  startupImg, airforceImg, villageImg, heritageImg, elephantsImg,
  digitalImg,
];

const HeroSection = () => {
  const { t } = useTranslation();
  const [query, setQuery] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleTagClick = (tag: string) => {
    if (!user) {
      navigate("/login");
      toast.error("Please log in to access government services.");
      return;
    }
    navigate(`/service/${encodeURIComponent(tag)}`);
  };

  const handleSearch = async () => {
    if (!query.trim()) return;
    
    setIsSearching(true);
    setShowResults(true);
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      if (!response.ok) throw new Error("Search failed");
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Search error:", error);
      toast.error("Failed to perform real-time search.");
    } finally {
      setIsSearching(false);
    }
  };

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative overflow-hidden">
      {/* Sliding background images */}
      {slides.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === currentSlide ? 1 : 0 }}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 gradient-hero opacity-75" />

      <div className="relative container py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-accent/20 text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 animate-fade-in-up backdrop-blur-sm border border-accent/30">
            🇮🇳 Powered by AI • Accessible to All
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-4 animate-fade-in-up text-balance" style={{ animationDelay: "0.1s" }}>
            {t('hero.title')}
          </h2>

          <p className="text-base md:text-lg text-primary-foreground/80 mb-8 animate-fade-in-up max-w-2xl mx-auto" style={{ animationDelay: "0.2s" }}>
            {t('hero.subtitle')}
          </p>

          {/* Search bar */}
          <div className="animate-fade-in-up relative" style={{ animationDelay: "0.3s" }}>
            <div className="bg-card/95 backdrop-blur-sm rounded-xl shadow-elevated p-2 flex items-center max-w-2xl mx-auto border border-accent/20">
              <Search className="w-5 h-5 text-muted-foreground ml-3 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSearch()}
                placeholder="Ask anything... e.g. 'How to apply for birth certificate?'"
                className="flex-1 px-3 py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm md:text-base"
                aria-label="Search government services"
              />
              <button className="shrink-0 p-2.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-accent" aria-label="Voice search">
                <Mic className="w-5 h-5" />
              </button>
              <button 
                onClick={handleSearch}
                disabled={isSearching}
                className="shrink-0 gradient-saffron text-accent-foreground px-5 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSearching ? "..." : "Search"}
              </button>
            </div>

            {/* Real-time Search Results Overlay */}
            {showResults && (
              <div className="absolute top-full left-0 right-0 mt-4 bg-card/95 backdrop-blur-md rounded-xl shadow-2xl border border-accent/20 max-w-2xl mx-auto overflow-hidden z-50 max-h-[400px] overflow-y-auto animate-fade-in">
                <div className="p-4 border-b border-accent/10 flex justify-between items-center sticky top-0 bg-card/95 backdrop-blur-md">
                  <h3 className="font-bold text-accent">Real-time Search Results</h3>
                  <button 
                    onClick={() => setShowResults(false)}
                    className="text-muted-foreground hover:text-foreground text-xs uppercase font-bold"
                  >
                    Close
                  </button>
                </div>
                <div className="p-2">
                  {isSearching ? (
                    <div className="py-8 text-center text-muted-foreground">
                      <div className="animate-spin inline-block w-6 h-6 border-2 border-accent border-t-transparent rounded-full mb-2"></div>
                      <p>Searching official sources...</p>
                    </div>
                  ) : results.length > 0 ? (
                    <div className="space-y-2">
                      {results.map((result, idx) => (
                        <a 
                          key={idx} 
                          href={result.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block p-3 rounded-lg hover:bg-accent/5 transition-colors border border-transparent hover:border-accent/20 group text-left"
                        >
                          <div className="font-semibold text-accent group-hover:underline mb-1">{result.title}</div>
                          <div className="text-xs text-muted-foreground line-clamp-2">{result.snippet}</div>
                          <div className="text-[10px] text-accent/60 mt-1 truncate">{result.link}</div>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center text-muted-foreground">
                      No real-time results found. Please try a different query.
                    </div>
                  )}
                </div>
              </div>
            )}

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {["Birth Certificate", "PM Kisan", "Ration Card", "Passport", "Pension"].map(tag => (
                <button 
                  key={tag} 
                  onClick={() => handleTagClick(tag)}
                  className="text-xs bg-primary-foreground/10 text-primary-foreground/80 hover:bg-primary-foreground/20 backdrop-blur-sm px-3 py-1.5 rounded-full transition-colors border border-primary-foreground/10"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex justify-center gap-1.5 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentSlide ? "bg-saffron w-5" : "bg-primary-foreground/40"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { num: "500+", label: "Services" },
              { num: "10+", label: "Languages" },
              { num: "24/7", label: "AI Support" },
            ].map(stat => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-extrabold text-saffron">{stat.num}</div>
                <div className="text-xs text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
