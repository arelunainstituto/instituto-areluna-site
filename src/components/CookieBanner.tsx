
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
        <div
            role="region"
            aria-label={t('cookie_banner.title')}
            className="fixed inset-x-0 bottom-0 z-50 border-t border-gold-leaf/20 bg-jet-fixed p-4 text-white shadow-elegant animate-in slide-in-from-bottom duration-500 md:p-6 dark:bg-black"
        >
            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-0 sm:px-2 md:flex-row md:gap-8 lg:px-4">
                <div className="flex-1 pr-10 text-center md:pr-0 md:text-left">
                    <h3 className="mb-1.5 font-vivant text-base text-gold-leaf sm:text-lg">
                        {t('cookie_banner.title')}
                    </h3>
                    <p className="font-vivant-light text-sm leading-relaxed text-white/80">
                        <Trans
                            i18nKey="cookie_banner.description"
                            components={[
                                <Link
                                    to="/privacidade"
                                    className="text-gold-leaf underline underline-offset-4 hover:text-white"
                                    key="privacy-link"
                                >
                                    policy
                                </Link>
                            ]}
                        />
                    </p>
                </div>

                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                    <button
                        type="button"
                        onClick={rejectCookies}
                        className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-6 font-vivant-light text-sm tracking-wide text-white/85 transition-colors duration-300 hover:border-white/50 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                        {t('cookie_banner.reject')}
                    </button>
                    <button
                        type="button"
                        onClick={acceptCookies}
                        className="inline-flex h-11 items-center justify-center rounded-full bg-gold-leaf px-6 font-vivant text-sm tracking-wide text-[hsl(20_11%_20%)] transition-colors duration-300 hover:bg-gold-leaf/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                        {t('cookie_banner.accept_all')}
                    </button>
                </div>

                <button
                    type="button"
                    onClick={() => setIsVisible(false)}
                    className="absolute -right-1 -top-1 inline-flex h-11 w-11 items-center justify-center rounded-full text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf md:hidden"
                    aria-label="Fechar"
                >
                    <X size={20} aria-hidden="true" />
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
