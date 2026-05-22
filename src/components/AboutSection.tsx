import { useTranslation } from 'react-i18next';
import { Brain, Users, Rocket, ShieldCheck } from "lucide-react";

const AboutSection = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Brain,
      title: "AI-Powered",
      desc: "Leveraging cutting-edge AI to match citizens with the right government schemes and services instantly."
    },
    {
      icon: Users,
      title: "Citizen Centric",
      desc: "Designed with a focus on ease of use, ensuring that every citizen, regardless of tech-savviness, can access benefits."
    },
    {
      icon: Rocket,
      title: "Fast Tracking",
      desc: "Reducing the time spent in navigating complex government portals through direct official links and automation."
    },
    {
      icon: ShieldCheck,
      title: "Secure & Official",
      desc: "We only provide links to verified .gov.in and .nic.in domains, ensuring your data and journey remain secure."
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <span className="text-xs font-semibold text-accent uppercase tracking-wider">Our Mission</span>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
              Simplifying Governance for Every Indian Citizen
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t('footer.about')} Samaj Seva AI is more than just a portal; it's a bridge between complex government bureaucracies and the people who need them most.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our platform uses advanced search technology to aggregate thousands of welfare schemes, healthcare services, and agricultural supports into a single, easy-to-navigate dashboard.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {values.map((val, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <val.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground text-sm">{val.title}</h5>
                    <p className="text-xs text-muted-foreground mt-1">{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elevated">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80" 
                alt="Team working on technology" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-elevated border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-saffron flex items-center justify-center text-white font-bold text-xl">
                  28+
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-tighter">States Covered</p>
                  <p className="text-sm font-bold text-foreground">Pan-India Support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
