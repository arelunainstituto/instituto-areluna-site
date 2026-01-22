import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const TermsOfUse = () => {
    const { t, i18n } = useTranslation('terms_of_use');
    const currentLang = i18n.language;

    return (
        <div className="min-h-screen bg-white text-gray-900 flex flex-col">
            <Header />

            <main className="flex-grow pt-[260px] pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-vivant text-[hsl(var(--gold-leaf))] mb-8">
                        {t('title')}
                    </h1>

                    <div className="prose prose-lg max-w-none font-vivant-light text-gray-700">
                        <p className="text-lg text-gray-600 mb-8">
                            {t('last_update', { date: new Date().toLocaleDateString(currentLang === 'pt' ? 'pt-PT' : currentLang) })}
                        </p>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-vivant text-gray-900">{t('sections.acceptance.title')}</h2>
                            <p>
                                {t('sections.acceptance.text')}
                            </p>

                            <h2 className="text-2xl font-vivant text-gray-900">{t('sections.intellectual_property.title')}</h2>
                            <p>
                                {t('sections.intellectual_property.text')}
                            </p>

                            <h2 className="text-2xl font-vivant text-gray-900">{t('sections.permitted_use.title')}</h2>
                            <p>
                                {t('sections.permitted_use.text')}
                            </p>

                            <h2 className="text-2xl font-vivant text-gray-900">{t('sections.liability.title')}</h2>
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
