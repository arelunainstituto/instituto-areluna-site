import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const TermsOfUse = () => {
    const { t, i18n } = useTranslation('terms_of_use');
    const currentLang = i18n.language;

    return (
        <div className="min-h-screen bg-background text-jet dark:bg-gray-950 dark:text-gray-100 flex flex-col">
            <SEOHead
              title="Termos de Utilização | Instituto AreLuna"
              description="Termos e condições de utilização do site do Instituto AreLuna — clínica dentária e de estética avançada no Porto."
              canonical="https://www.institutoareluna.pt/termos"
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
                            <h2 className="text-2xl font-vivant text-jet dark:text-white">{t('sections.acceptance.title')}</h2>
                            <p>
                                {t('sections.acceptance.text')}
                            </p>

                            <h2 className="text-2xl font-vivant text-jet dark:text-white">{t('sections.intellectual_property.title')}</h2>
                            <p>
                                {t('sections.intellectual_property.text')}
                            </p>

                            <h2 className="text-2xl font-vivant text-jet dark:text-white">{t('sections.permitted_use.title')}</h2>
                            <p>
                                {t('sections.permitted_use.text')}
                            </p>

                            <h2 className="text-2xl font-vivant text-jet dark:text-white">{t('sections.liability.title')}</h2>
                            <p>
                                {t('sections.liability.text')}
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

export default TermsOfUse;
