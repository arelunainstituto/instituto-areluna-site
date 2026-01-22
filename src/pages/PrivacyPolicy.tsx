import { useTranslation } from 'react-i18next';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const PrivacyPolicy = () => {
    const { t, i18n } = useTranslation('privacy_policy');
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
                            <h2 className="text-2xl font-vivant text-gray-900">{t('sections.intro.title')}</h2>
                            <p>
                                {t('sections.intro.text')}
                            </p>

                            <h2 className="text-2xl font-vivant text-gray-900">{t('sections.collection.title')}</h2>
                            <p>
                                {t('sections.collection.text')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t('sections.collection.items.contact')}</li>
                                <li>{t('sections.collection.items.cookies')}</li>
                            </ul>

                            <h2 className="text-2xl font-vivant text-gray-900">{t('sections.usage.title')}</h2>
                            <p>
                                {t('sections.usage.text')}
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>{t('sections.usage.items.response')}</li>
                                <li>{t('sections.usage.items.improvement')}</li>
                                <li>{t('sections.usage.items.marketing')}</li>
                            </ul>

                            <h2 className="text-2xl font-vivant text-gray-900">{t('sections.rights.title')}</h2>
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
