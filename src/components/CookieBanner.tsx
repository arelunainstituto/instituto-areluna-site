
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const CookieBanner = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            // Pequeno delay para a animação de entrada ficar mais suave
            const timer = setTimeout(() => setIsVisible(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const rejectCookies = () => {
        localStorage.setItem('cookie-consent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-jet/95 backdrop-blur-md border-t border-pure-white/10 shadow-2xl animate-in slide-in-from-bottom duration-500">
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-[hsl(var(--gold-leaf))] font-vivant text-lg mb-2">
                        {t('cookie_banner.title')}
                    </h3>
                    <p className="text-pure-white/80 text-sm font-vivant-light leading-relaxed">
                        <Trans
                            i18nKey="cookie_banner.description"
                            components={[
                                <Link
                                    to="/privacidade"
                                    className="text-[hsl(var(--gold-leaf))] hover:underline underline-offset-4"
                                    key="privacy-link"
                                >
                                    policy
                                </Link>
                            ]}
                        />
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 min-w-fit">
                    <button
                        onClick={rejectCookies}
                        className="px-6 py-2.5 rounded-lg border border-pure-white/20 text-pure-white/80 hover:bg-pure-white/5 hover:text-white transition-all duration-300 font-vivant-light text-sm tracking-wide"
                    >
                        {t('cookie_banner.reject')}
                    </button>
                    <button
                        onClick={acceptCookies}
                        className="px-6 py-2.5 rounded-lg bg-[hsl(var(--gold-leaf))] text-white hover:bg-amber-400 transition-all duration-300 font-vivant text-sm tracking-wide shadow-lg shadow-amber-900/20"
                    >
                        {t('cookie_banner.accept_all')}
                    </button>
                </div>

                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-2 right-2 p-1 text-pure-white/40 hover:text-white transition-colors md:hidden"
                    aria-label="Fechar"
                >
                    <X size={20} />
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
