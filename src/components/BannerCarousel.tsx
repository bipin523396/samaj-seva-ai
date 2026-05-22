import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  { title: "Digital India", subtitle: "Power to Empower", gradient: "from-blue-900 to-indigo-800", icon: "🌐" },
  { title: "AI Impact Summit 2026", subtitle: "Shaping Inclusive & Responsible AI", gradient: "from-purple-900 to-pink-800", icon: "🤖" },
  { title: "PM Kisan Samman Nidhi", subtitle: "Direct benefit to 12 Cr+ farmers", gradient: "from-green-800 to-emerald-700", icon: "🌾" },
  { title: "Ayushman Bharat", subtitle: "Health coverage for 50 Cr citizens", gradient: "from-teal-800 to-cyan-700", icon: "🏥" },
  { title: "Skill India Mission", subtitle: "Empowering youth with future skills", gradient: "from-orange-800 to-amber-700", icon: "🎓" },
  { title: "Make in India", subtitle: "Manufacturing hub of the world", gradient: "from-amber-800 to-yellow-700", icon: "🏭" },
  { title: "Swachh Bharat Mission", subtitle: "Clean India, Green India", gradient: "from-lime-800 to-green-700", icon: "🧹" },
  { title: "Jal Jeevan Mission", subtitle: "Har Ghar Nal Se Jal", gradient: "from-sky-800 to-blue-700", icon: "💧" },
  { title: "PM Awas Yojana", subtitle: "Housing for All by 2025", gradient: "from-rose-800 to-red-700", icon: "🏠" },
  { title: "Startup India", subtitle: "Nurturing innovation & entrepreneurship", gradient: "from-violet-800 to-purple-700", icon: "🚀" },
  { title: "BharatNet Project", subtitle: "Connecting 6 lakh villages with broadband", gradient: "from-indigo-800 to-blue-700", icon: "📡" },
  { title: "National Education Policy", subtitle: "Transforming India's education system", gradient: "from-cyan-800 to-teal-700", icon: "📚" },
  { title: "Ujjwala Yojana", subtitle: "Free LPG connections to BPL families", gradient: "from-red-800 to-orange-700", icon: "🔥" },
  { title: "DigiLocker", subtitle: "Your documents, anytime, anywhere", gradient: "from-blue-800 to-indigo-700", icon: "📂" },
  { title: "UMANG App", subtitle: "Unified platform for govt services", gradient: "from-emerald-800 to-green-700", icon: "📱" },
  { title: "e-Shram Portal", subtitle: "Registration for unorganized workers", gradient: "from-yellow-800 to-amber-700", icon: "👷" },
  { title: "PM Vishwakarma Yojana", subtitle: "Supporting traditional artisans", gradient: "from-orange-900 to-red-800", icon: "🛠️" },
  { title: "One Nation One Ration Card", subtitle: "Portability of food security", gradient: "from-green-900 to-teal-800", icon: "🍚" },
  { title: "National Health Mission", subtitle: "Accessible healthcare for all", gradient: "from-pink-800 to-rose-700", icon: "❤️" },
  { title: "Smart Cities Mission", subtitle: "Building 100 smart cities across India", gradient: "from-slate-800 to-zinc-700", icon: "🏙️" },
];

const BannerCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section className="relative w-full bg-foreground/5">
      <div className="relative overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_70%]">
              <div className={`mx-2 md:mx-4 rounded-xl bg-gradient-to-r ${banner.gradient} p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center text-center text-white min-h-[200px] md:min-h-[300px] lg:min-h-[400px] shadow-lg transition-transform`}>
                <span className="text-4xl md:text-6xl mb-4">{banner.icon}</span>
                <h3 className="text-xl md:text-3xl lg:text-4xl font-extrabold mb-2">{banner.title}</h3>
                <p className="text-sm md:text-lg opacity-90 max-w-xl">{banner.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card text-foreground rounded-full p-2 shadow-elevated transition-colors z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-card/80 backdrop-blur-sm hover:bg-card text-foreground rounded-full p-2 shadow-elevated transition-colors z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 py-4">
        {banners.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === selectedIndex ? "bg-accent w-6" : "bg-muted-foreground/30"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default BannerCarousel;
