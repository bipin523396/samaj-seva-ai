import { Mic, Languages, FileCheck, Bell, Brain, Accessibility } from "lucide-react";
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Mic,
      title: t('features.community'),
      desc: t('features.communityDesc'),
    },
    {
      icon: Languages,
      title: t('features.transparency'),
      desc: t('features.transparencyDesc'),
    },
    {
      icon: Brain,
      title: t('features.impact'),
      desc: t('features.impactDesc'),
    },
    {
      icon: FileCheck,
      title: t('features.community'), // Placeholder - reusing keys for now as translation.json is minimal
      desc: t('features.communityDesc'),
    },
    {
      icon: Bell,
      title: t('features.transparency'),
      desc: t('features.transparencyDesc'),
    },
    {
      icon: Accessibility,
      title: t('features.impact'),
      desc: t('features.impactDesc'),
    },
  ];

  return (
    <section id="impact" className="py-16 md:py-20 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">Why This Platform</span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">{t('features.title')}</h3>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">{t('features.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-4">
                <feat.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="text-base font-bold text-foreground mb-2">{feat.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
