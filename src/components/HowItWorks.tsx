import { MessageSquare, Search, ClipboardCheck, CheckCircle2 } from "lucide-react";
import { useTranslation } from 'react-i18next';

const HowItWorks = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: MessageSquare, title: t('howItWorks.step1'), desc: t('howItWorks.step1Desc') },
    { icon: Search, title: t('howItWorks.step2'), desc: t('howItWorks.step2Desc') },
    { icon: ClipboardCheck, title: t('howItWorks.step3'), desc: t('howItWorks.step3Desc') },
    { icon: CheckCircle2, title: t('howItWorks.step4'), desc: t('howItWorks.step4Desc') },
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-accent uppercase tracking-wider">Simple Process</span>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-2">{t('howItWorks.title')}</h3>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">{t('howItWorks.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-border" />
              )}
              <div className="w-16 h-16 rounded-full gradient-saffron flex items-center justify-center mx-auto mb-4 relative z-10 shadow-elevated">
                <step.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <div className="text-xs font-bold text-accent mb-1">Step {i + 1}</div>
              <h4 className="text-sm font-bold text-foreground mb-1">{step.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
