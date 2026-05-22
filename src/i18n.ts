import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

if (!i18n.isInitialized) {
    i18n
        .use(Backend)
        .use(LanguageDetector)
        .use(initReactI18next)
        .init({
            supportedLngs: ['en', 'hi'],
            nonExplicitSupportedLngs: true,
            load: 'languageOnly',
            fallbackLng: 'en',
            debug: process.env.NODE_ENV !== 'production',
            interpolation: {
                escapeValue: false,
            },
            backend: {
                loadPath: '/locales/{{lng}}/translation.json',
            },
            detection: {
                order: ['localStorage', 'navigator'],
                caches: ['localStorage'],
            },
        });
}

export default i18n;
