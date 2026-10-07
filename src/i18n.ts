import i18n, { type BackendModule, type ResourceKey } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// pt é o fallback e a língua do prerender: fica no bundle inicial (síncrono),
// para que o HTML pré-renderizado tenha o texto real e nunca as chaves.
import pt from './locales/pt/translation.json';
import pt_hair from './locales/pt/hair_transplant_page.json';
import pt_facial from './locales/pt/facial_aesthetics_page.json';
import pt_privacy from './locales/pt/privacy_policy.json';
import pt_terms from './locales/pt/terms_of_use.json';

const NAMESPACES = [
    'translation',
    'hair_transplant_page',
    'facial_aesthetics_page',
    'privacy_policy',
    'terms_of_use',
] as const;

// Restantes línguas: import dinâmico. O vite.config.ts agrupa os ficheiros de
// cada língua num único chunk (`locale-<lng>`), carregado só quando é preciso.
const lazyLocales = import.meta.glob<{ default: ResourceKey }>([
    './locales/*/*.json',
    '!./locales/pt/*.json',
]);

/** Backend mínimo: resolve `<lng>/<ns>` para o import dinâmico correspondente. */
const lazyBackend: BackendModule = {
    type: 'backend',
    init: () => undefined,
    read(language, namespace, callback) {
        const load = lazyLocales[`./locales/${language}/${namespace}.json`];
        // Língua/namespace inexistente (ex.: `pt-PT`, ou `de` sem páginas
        // próprias): devolve vazio e o i18next recorre ao fallback `pt`.
        if (!load) {
            callback(null, {});
            return;
        }
        load()
            .then((mod) => callback(null, mod.default))
            .catch((err: Error) => callback(err, null));
    },
};

i18n
    .use(lazyBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'pt',
        debug: import.meta.env.DEV,

        ns: [...NAMESPACES],
        defaultNS: 'translation',

        // pt vem embutido; as outras línguas vêm do backend acima.
        partialBundledLanguages: true,
        resources: {
            pt: {
                translation: pt,
                hair_transplant_page: pt_hair,
                facial_aesthetics_page: pt_facial,
                privacy_policy: pt_privacy,
                terms_of_use: pt_terms,
            },
        },

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },

        react: {
            useSuspense: false // Avoid styling issues during loading for now
        }
    });

export default i18n;
