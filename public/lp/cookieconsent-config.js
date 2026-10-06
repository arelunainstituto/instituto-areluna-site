// Configuração do Cookie Consent (vanilla-cookieconsent por orestbida)
// https://cookieconsent.orestbida.com
import * as CookieConsent from 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.esm.js';

// Função para atualizar o Consent Mode do Google com base nas escolhas do utilizador
function updateGtagConsent() {
    if (typeof gtag !== 'function') return;
    gtag('consent', 'update', {
        'analytics_storage': CookieConsent.acceptedService('analytics_storage', 'analytics') ? 'granted' : 'denied',
        'ad_storage': CookieConsent.acceptedService('ad_storage', 'advertisement') ? 'granted' : 'denied',
        'ad_user_data': CookieConsent.acceptedService('ad_user_data', 'advertisement') ? 'granted' : 'denied',
        'ad_personalization': CookieConsent.acceptedService('ad_personalization', 'advertisement') ? 'granted' : 'denied',
    });
}

CookieConsent.run({
    // Atualiza consentimento quando o utilizador faz escolhas
    onFirstConsent: updateGtagConsent,
    onConsent: updateGtagConsent,
    onChange: updateGtagConsent,

    categories: {
        necessary: {
            enabled: true,
            readOnly: true
        },
        analytics: {
            autoClear: {
                cookies: [{ name: /^_ga/ }, { name: '_gid' }]
            },
            services: {
                analytics_storage: {
                    label: 'Google Analytics – estatísticas de visitas anónimas.'
                }
            }
        },
        advertisement: {
            services: {
                ad_storage: {
                    label: 'Publicidade – armazenamento de cookies de anúncios (Meta Pixel, Google Ads).'
                },
                ad_user_data: {
                    label: 'Dados do utilizador para publicidade – envio de dados para Google/Meta.'
                },
                ad_personalization: {
                    label: 'Personalização de anúncios – anúncios adaptados ao perfil.'
                }
            }
        }
    },

    language: {
        default: 'pt',
        translations: {
            pt: {
                consentModal: {
                    title: '🍪 Utilizamos cookies',
                    description:
                        'Utilizamos cookies para melhorar a sua experiência, analisar o tráfego do site e apresentar conteúdo publicitário relevante. Pode aceitar todos ou gerir as suas preferências. Consulte a nossa <a href="/politica-de-privacidade" class="cc__link">Política de Privacidade</a>.',
                    acceptAllBtn: 'Aceitar todos',
                    acceptNecessaryBtn: 'Recusar não essenciais',
                    showPreferencesBtn: 'Gerir preferências',
                    footer:
                        '<a href="/politica-de-privacidade" class="cc__link">Política de Privacidade</a>'
                },
                preferencesModal: {
                    title: 'Preferências de Cookies',
                    acceptAllBtn: 'Aceitar todos',
                    acceptNecessaryBtn: 'Recusar não essenciais',
                    savePreferencesBtn: 'Guardar preferências',
                    closeIconLabel: 'Fechar',
                    sections: [
                        {
                            title: 'O que são cookies?',
                            description:
                                'Os cookies são pequenos ficheiros de texto que os sites guardam no seu dispositivo. Utilizamo-los para garantir o funcionamento do site, analisar visitas e personalizar publicidade.'
                        },
                        {
                            title: 'Cookies estritamente necessários',
                            description: 'Essenciais para o funcionamento do site. Não podem ser desativados.',
                            linkedCategory: 'necessary'
                        },
                        {
                            title: 'Performance e Analytics',
                            description: 'Ajudam-nos a perceber como os visitantes interagem com o site (Google Analytics). Todos os dados são anonimizados.',
                            linkedCategory: 'analytics'
                        },
                        {
                            title: 'Publicidade e Marketing',
                            description: 'Permitem apresentar anúncios relevantes e medir a eficácia das campanhas (Meta Pixel, Google Ads).',
                            linkedCategory: 'advertisement'
                        },
                        {
                            title: 'Mais informações',
                            description: 'Para qualquer questão sobre a nossa política de cookies, <a href="/contactos" class="cc__link">contacte-nos</a>.'
                        }
                    ]
                }
            }
        }
    }
});
