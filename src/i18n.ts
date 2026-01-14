
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import pt from './locales/pt/translation.json';
import en from './locales/en/translation.json';
import de from './locales/de/translation.json';
import es from './locales/es/translation.json';
import fr from './locales/fr/translation.json';
import it from './locales/it/translation.json';
import nl from './locales/nl/translation.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt',
        debug: import.meta.env.DEV,

        resources: {
            pt: { translation: pt },
            en: { translation: en },
            de: { translation: de },
            es: { translation: es },
            fr: { translation: fr },
            it: { translation: it },
            nl: { translation: nl }
        },

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        react: {
            useSuspense: false // Avoid styling issues during loading for now
        }
    });

export default i18n;
