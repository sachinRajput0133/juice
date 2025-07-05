import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
const resources = {
  en: {
    translation: {
      languages: {
        en: 'English',
        zh: 'Chinese',
        pt: 'Portuguese',
        es: 'Spanish',
        fr: 'French',
        ja: 'Japanese',
      },
      home: {
        subsidiaries: {
          cica: {
            name: 'CICA Life',
            title: 'CICA Life Insurance Company',
            description: 'Life insurance and financial services',
          },
          citizens: {
            name: 'Citizens National',
            title: 'Citizens National Bank',
            description: 'Banking and financial services',
          },
          security: {
            name: 'Security Plan',
            title: 'Security Plan Life Insurance',
            description: 'Life insurance and protection plans',
          },
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
