import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container py-10">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-3">Samaj Seva AI</h4>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              {t('footer.about')}
            </p>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-sm">{t('footer.quickLinks')}</h5>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Home", "Services", "Schemes", "Track Application", "Help Center"].map(link => (
                <li key={link}><a href="#" className="hover:text-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-sm">{t('footer.contact')}</h5>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              {["Certificates", "Subsidies", "Education", "Health", "Employment"].map(link => (
                <li key={link}><a href="#" className="hover:text-accent transition-colors">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-3 text-sm">Support</h5>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>📞 1800-XXX-XXXX (Toll Free)</li>
              <li>📧 support@citizenportal.gov.in</li>
              <li>🕐 24/7 AI Assistant Available</li>
            </ul>
          </div>
        </div>
        <div className="tricolor-bar mt-8 rounded-full" />
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-primary-foreground/50">
          <span>© 2026 Citizen Service Portal. All rights reserved.</span>
          <span>Designed for Digital India 🇮🇳</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
