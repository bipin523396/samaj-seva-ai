import {
  GraduationCap, Heart, Briefcase, CloudRain, Wallet, Home, BookOpen, UserCheck, Tractor, Leaf
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { toast } from "@/components/ui/sonner";
import { useAuth } from "@/contexts/AuthContext";

const ServiceCategories = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  const navigate = useNavigate();

  const categories = [
    { icon: GraduationCap, title: t("services.education"), desc: "Scholarships, AI tutor & admissions", color: "bg-primary/10 text-primary" },
    { icon: Tractor, title: t("services.agriculture"), desc: "PM Kisan, soil health & crop insurance", color: "bg-success/10 text-success" },
    { icon: Heart, title: t("services.healthcare"), desc: "Symptom check, hospital finder & records", color: "bg-destructive/10 text-destructive" },
    { icon: Wallet, title: t("services.finance"), desc: "Banking, insurance & micro-loans", color: "bg-chakra/10 text-chakra" },
    { icon: Briefcase, title: t("services.women"), desc: "Jobs, safety & entrepreneurship tools", color: "bg-accent/10 text-accent" },
    { icon: Home, title: t("services.housing"), desc: "PM Awas, electricity & water services", color: "bg-saffron/10 text-saffron" },
    { icon: BookOpen, title: t("services.skills"), desc: "Vocational training & skill certification", color: "bg-primary/10 text-primary" },
    { icon: UserCheck, title: t("services.social_security"), desc: "Pension, ration card & worker benefits", color: "bg-success/10 text-success" },
    { icon: CloudRain, title: t("services.disaster"), desc: "Real-time alerts & relief assistance", color: "bg-destructive/10 text-destructive" },
    { icon: Leaf, title: t("services.environment"), desc: "Green initiatives & waste management", color: "bg-chakra/10 text-chakra" },
  ];

  const handleCategoryClick = (title: string) => {
    if (!user) {
      navigate("/login");
      toast.error("Please log in to access government services.");
      return;
    }

    navigate(`/service/${encodeURIComponent(title)}`);
  };

  return (
    <section id="services" className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">Explore</span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">{t('services.title')}</h3>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              className="group bg-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-all duration-300 text-left hover:-translate-y-1 border border-border/50 hover:border-accent/30 animate-fade-in-up"
              onClick={() => handleCategoryClick(cat.title)}
              style={{ animationDelay: `${i * 0.05}s` }}
              type="button"
            >
              <div className={`w-11 h-11 rounded-lg ${cat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                <cat.icon className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-semibold text-foreground leading-snug">{cat.title}</h4>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{cat.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
