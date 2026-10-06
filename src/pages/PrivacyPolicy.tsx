import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicy = () => {
    const { t, i18n } = useTranslation('privacy_policy');
    const currentLang = i18n.language;

    return (
        <div className="min-h-screen bg-background text-jet dark:bg-gray-950 dark:text-gray-100 flex flex-col">
            <SEOHead
              title="Política de Privacidade | Instituto AreLuna"
              description="Política de privacidade e tratamento de dados pessoais do Instituto AreLuna, em conformidade com o RGPD."
              canonical="https://www.institutoareluna.pt/privacidade"
              noindex={true}
            />
            <Header />

            <main className="flex-grow pt-28 pb-20 px-4 sm:px-6 lg:pt-32">
                <div className="mx-auto w-full max-w-3xl">
                    <h1 className="font-vivant text-3xl leading-tight text-gold-leaf sm:text-4xl lg:text-5xl mb-8">
                        {t('title')}
                    </h1>

                    <div className="prose prose-lg max-w-none font-vivant-light text-jet/80 dark:text-gray-300 dark:prose-invert">
                        <p className="text-base text-jet/60 dark:text-gray-400 mb-8">
                            {t('last_update', { date: new Date().toLocaleDateString(currentLang === 'pt' ? 'pt-PT' : currentLang) })}
                        </p>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-vivant text-jet dark:text-white">{t('sections.intro.title')}</h2>
                            <p>
                                {t('sections.intro.text')}
                            </p>

                            <h2 className="text-2xl font-vivant text-jet dark:text-white">{t('sections.collection.title')}</h2>
                            <p>
                                {t('sections.collection.text')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t('sections.collection.items.contact')}</li>
                                <li>{t('sections.collection.items.cookies')}</li>
                            </ul>

                            <h2 className="text-2xl font-vivant text-jet dark:text-white">{t('sections.usage.title')}</h2>
                            <p>
                                {t('sections.usage.text')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t('sections.usage.items.response')}</li>
                                <li>{t('sections.usage.items.improvement')}</li>
                                <li>{t('sections.usage.items.marketing')}</li>
                            </ul>

                            <h2 className="text-2xl font-vivant text-jet dark:text-white">{t('sections.rights.title')}</h2>
                            <p>
                                {t('sections.rights.text')}
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <WhatsAppFloat />
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
