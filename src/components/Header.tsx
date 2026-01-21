import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: t('nav.institute') },
    { href: "/tratamentos", label: t('nav.treatments') },
    { href: "/turismo-dentario", label: t('nav.tourism') },
    { href: "/transplante-capilar", label: t('nav.hair_transplant') },
    { href: "/estetica-facial", label: t('nav.facial_aesthetics') },
    // { href: "#midia", label: "MÍDIA" },
    { href: "/contato", label: t('common.contact') },
    { href: "/blog", label: t('nav.blog') },
    // { href: "#formacoes", label: "FORMAÇÕES" }
  ];


  const handleMobileMenuClick = (href: string) => {
    setIsMobileMenuOpen(false);

    // Check if it's a page route (starts with /) or an anchor (#)
    if (href.startsWith('/')) {
      // Navigate to page
      window.location.href = href;
    } else {
      // Smooth scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled || isBlogPage
      ? 'bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] shadow-xl border-b border-[hsl(var(--gold-leaf))]/20 dark:border-[hsl(var(--gold-leaf))]/30'
      : 'bg-transparent'
      }`}>
      {/* Main header */}
      <div className={`container mx-auto px-3 xs:px-4 sm:px-6 transition-all duration-500 ${isScrolled || isBlogPage ? 'py-1.5 xs:py-2 sm:py-3' : 'py-2 xs:py-3 sm:py-4'
        }`}>
        {/* Mobile Layout - Side by side */}
        <div className="flex items-center justify-between lg:hidden">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954590/instituto-areluna/684037b8-d590-4e39-83d2-b5ce9e85eae9.png"
              alt="Areluna"
              loading="eager"
              decoding="async"
              className={`w-auto transition-all duration-500 ${isScrolled || isBlogPage
                ? 'h-16 xs:h-16 sm:h-18'
                : 'h-[6rem] xs:h-18 sm:h-20'
                }`}
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`relative z-50 p-1.5 xs:p-2 rounded-lg backdrop-blur-sm border transition-all duration-300 min-w-[40px] min-h-[40px] flex items-center justify-center bg-white/10 border-white/20 hover:bg-white/20`}
            aria-label="Toggle mobile menu"
          >
            <div className="w-5 xs:w-6 h-5 xs:h-6 flex flex-col justify-center items-center">
              <span className={`block w-4 xs:w-5 h-0.5 transition-all duration-300 bg-white ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5 xs:translate-y-1' : '-translate-y-0.5 xs:-translate-y-1'
                }`}></span>
              <span className={`block w-4 xs:w-5 h-0.5 transition-all duration-300 bg-white ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
              <span className={`block w-4 xs:w-5 h-0.5 transition-all duration-300 bg-white ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5 xs:-translate-y-1' : 'translate-y-0.5 xs:translate-y-1'
                }`}></span>
            </div>
          </button>
        </div>

        {/* Desktop Layout - Logo above menu */}
        <div className="hidden lg:block">
          {/* Logo centralizada */}
          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954590/instituto-areluna/684037b8-d590-4e39-83d2-b5ce9e85eae9.png"
              alt="Areluna"
              loading="eager"
              decoding="async"
              className={`w-auto transition-all duration-500 ${isScrolled || isBlogPage
                ? 'h-20'
                : 'h-40'
                }`}
            />
          </div>

          {/* Desktop Navigation - Abaixo da logo */}
          <nav className={`flex items-center justify-center space-x-5 xl:space-x-6 transition-all duration-500 ${isScrolled || isBlogPage ? 'mt-2' : 'mt-4'
            }`}>
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`hover:text-[hsl(var(--gold-leaf))] transition-colors font-light tracking-wider text-xs xl:text-sm whitespace-nowrap text-white uppercase`}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    const element = document.querySelector(item.href);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.label}
              </a>
            ))}
            <div className="pl-4 opacity-80 border-l border-white/10 ml-4">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>

        {/* Mobile Navigation Overlay */}
        <div className={`lg:hidden fixed inset-0 top-0 bg-black/80 backdrop-blur-xl transition-all duration-700 ${isMobileMenuOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
          }`}>
          {/* Background decorativo */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[hsl(var(--jet))]/10 to-[hsl(var(--ring))]/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-[hsl(var(--ring))]/8 to-[hsl(var(--jet))]/5 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 flex flex-col min-h-screen">
            {/* Header do menu mobile */}
            <div className="pt-16 xs:pt-20 pb-6 xs:pb-8 text-center">
              <img
                src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954590/instituto-areluna/684037b8-d590-4e39-83d2-b5ce9e85eae9.png"
                alt="Areluna"
                loading="lazy"
                decoding="async"
                className="h-[8rem] xs:h-20 w-auto mx-auto mb-3 xs:mb-4"
              />
              <div className="mt-4 flex justify-center">
                <LanguageSwitcher />
              </div>
            </div>

            {/* Navegação principal */}
            <div className="flex-1 flex flex-col justify-center px-4 xs:px-6 sm:px-8">
              <nav className="space-y-1.5 xs:space-y-2">
                {menuItems.slice(0, 5).map((item, index) => (
                  <button
                    key={item.href}
                    onClick={() => handleMobileMenuClick(item.href)}
                    className={`w-full text-left px-4 xs:px-5 sm:px-6 py-3 xs:py-3.5 sm:py-4 rounded-lg xs:rounded-xl transition-all duration-300 transform hover:scale-[0.98] active:scale-95 border border-transparent hover:border-[hsl(var(--gold-leaf))]/20 hover:bg-gradient-to-r hover:from-[hsl(var(--jet))]/5 hover:to-[hsl(var(--ring))]/5 dark:hover:from-gray-800/50 dark:hover:to-gray-900/50 ${index === 0 ? 'animate-slide-in-left' :
                      index === 1 ? 'animate-slide-in-left animation-delay-100' :
                        index === 2 ? 'animate-slide-in-left animation-delay-200' :
                          index === 3 ? 'animate-slide-in-left animation-delay-300' :
                            'animate-slide-in-left animation-delay-400'
                      }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white font-light tracking-wider text-sm xs:text-base uppercase">
                        {item.label}
                      </span>
                      <svg className="w-3.5 xs:w-4 h-3.5 xs:h-4 text-[hsl(var(--gold-leaf))]/60 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </nav>

              {/* Seção secundária */}
              <div className="mt-6 xs:mt-8 pt-4 xs:pt-6 border-t border-[hsl(var(--gold-leaf))]/20">
                <div className="grid grid-cols-2 gap-2 xs:gap-3">
                  {menuItems.slice(5).map((item, index) => (
                    <button
                      key={item.href}
                      onClick={() => handleMobileMenuClick(item.href)}
                      className="px-3 xs:px-4 py-2.5 xs:py-3 rounded-lg border border-[hsl(var(--gold-leaf))]/20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:bg-[hsl(var(--gold-leaf))]/10 transition-all duration-300 transform hover:scale-95"
                    >
                      <span className="text-white font-light text-xs xs:text-sm tracking-wide uppercase">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer do menu */}
            <div className="pb-6 xs:pb-8 pt-4 xs:pt-6 text-center border-t border-[hsl(var(--gold-leaf))]/10">

              {/* Call to action */}
              <div className="px-4 xs:px-6 sm:px-8">
                <button
                  onClick={() => window.open('https://wa.me/351910098226', '_blank')}
                  className="w-full bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black hover:from-gray-800 hover:to-gray-900 text-white font-medium py-3 xs:py-4 px-4 xs:px-6 rounded-lg xs:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[0.98] active:scale-95 text-sm xs:text-base"
                >
                  {t('header.book_consultation')}
                </button>

                <p className="text-xs text-white/70 mt-2 xs:mt-3 font-light px-2">
                  {t('header.subtitle')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;