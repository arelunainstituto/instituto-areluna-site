
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

import pt_hair from './locales/pt/hair_transplant_page.json';
import en_hair from './locales/en/hair_transplant_page.json';
import es_hair from './locales/es/hair_transplant_page.json';
import fr_hair from './locales/fr/hair_transplant_page.json';

import pt_facial from './locales/pt/facial_aesthetics_page.json';
import en_facial from './locales/en/facial_aesthetics_page.json';
import es_facial from './locales/es/facial_aesthetics_page.json';
import fr_facial from './locales/fr/facial_aesthetics_page.json';

import pt_privacy from './locales/pt/privacy_policy.json';
import en_privacy from './locales/en/privacy_policy.json';
import es_privacy from './locales/es/privacy_policy.json';
import fr_privacy from './locales/fr/privacy_policy.json';

import pt_terms from './locales/pt/terms_of_use.json';
import en_terms from './locales/en/terms_of_use.json';
import es_terms from './locales/es/terms_of_use.json';
import fr_terms from './locales/fr/terms_of_use.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt',
        debug: import.meta.env.DEV,

        resources: {
            pt: {
                translation: pt,
                hair_transplant_page: pt_hair,
                facial_aesthetics_page: pt_facial,
                privacy_policy: pt_privacy,
                terms_of_use: pt_terms
            },
            en: {
                translation: en,
                hair_transplant_page: en_hair,
                facial_aesthetics_page: en_facial,
                privacy_policy: en_privacy,
                terms_of_use: en_terms
            },
            de: { translation: de },
            es: {
                translation: es,
                hair_transplant_page: es_hair,
                facial_aesthetics_page: es_facial,
                privacy_policy: es_privacy,
                terms_of_use: es_terms
            },
            fr: {
                translation: fr,
                hair_transplant_page: fr_hair,
                facial_aesthetics_page: fr_facial,
                privacy_policy: fr_privacy,
                terms_of_use: fr_terms
            },
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
