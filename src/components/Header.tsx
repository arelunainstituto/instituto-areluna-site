import { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, ChevronRight, X, Menu } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useContact } from '@/contexts/ContactContext';
import logoImg from "@/assets/logo.webp";
import logoImg256 from "@/assets/logo-256.webp";

/**
 * Cabeçalho global. Inspiração: blocos "navbar" do catálogo 21st.dev
 * (navbar centrada com menu em painel no mobile), adaptados aos tokens AreLuna.
 * - Transparente sobre os heros; sólido ao fazer scroll e nas rotas sem hero (`isSolidHeader`).
 * - Menu mobile acessível: aria-expanded/aria-controls, foco preso no painel, Esc fecha
 *   e devolve o foco ao botão, scroll da página bloqueado enquanto está aberto.
 */
/** Telefone + seletor de língua (no modo compacto, o telefone passa a ícone). */
const HeaderActions = ({ compact }: { compact: boolean }) => {
  const { contact, onContactClick } = useContact();
  return (
    <>
      <a
        href={contact.telUrl}
        onClick={onContactClick}
        aria-label={`Telefone: ${contact.phone}`}
        className={cn(
          'inline-flex h-10 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-gold-leaf/50 text-xs font-medium text-gold-leaf transition-colors duration-300 hover:bg-gold-leaf/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf',
          compact ? 'w-10' : 'ml-2 px-4',
        )}
      >
        <Phone className="h-3.5 w-3.5" aria-hidden="true" />
        {!compact && contact.phone}
      </a>
      <div className="ml-3 flex h-11 items-center border-l border-white/15 pl-4">
        <LanguageSwitcher />
      </div>
    </>
  );
};

const Header = () => {
  const { t } = useTranslation();
  const { contact, onContactClick } = useContact();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const isBlogPage = location.pathname.startsWith('/blog');
  const isPrivacyOrTerms = location.pathname === '/privacidade' || location.pathname === '/termos';
  const knownTransparentRoutes = ['/', '/tratamentos', '/transplante-capilar', '/estetica-facial', '/contato'];
  const isSolidHeader = isBlogPage || isPrivacyOrTerms || location.pathname === '/sobre-a-fundadora' || !knownTransparentRoutes.includes(location.pathname);
  const isSolid = isScrolled || isSolidHeader;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 40);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = useCallback((restoreFocus = false) => {
    setIsMobileMenuOpen(false);
    if (restoreFocus) menuButtonRef.current?.focus();
  }, []);

  // Menu mobile aberto: bloquear scroll, focar o primeiro link, Esc fecha, Tab fica no painel.
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const panel = panelRef.current;
    panel?.removeAttribute('inert');
    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])') ?? [],
      );
    const raf = requestAnimationFrame(() => (panel?.querySelector<HTMLElement>('nav a') ?? focusables()[0])?.focus());

    const onKeyDown = (e: KeyboardEvent) => {
      // O seletor de língua (Radix) trata o seu próprio Esc/Tab.
      if ((e.target as HTMLElement | null)?.closest?.('[role="menu"]')) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        closeMobileMenu(true);
        return;
      }
      if (e.key !== 'Tab') return;
      const items = [menuButtonRef.current, ...focusables()].filter(Boolean) as HTMLElement[];
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isMobileMenuOpen, closeMobileMenu]);

  // Painel fechado: fora da árvore de acessibilidade e do foco (atributo inert).
  useEffect(() => {
    panelRef.current?.toggleAttribute('inert', !isMobileMenuOpen);
  }, [isMobileMenuOpen]);

  // Fechar o menu se a rota mudar.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const menuItems = [
    { href: "/", label: t('nav.institute') },
    { href: "/tratamentos", label: t('nav.treatments') },
    { href: "/transplante-capilar", label: t('nav.hair_transplant') },
    { href: "/estetica-facial", label: t('nav.facial_aesthetics') },
    { href: "/sobre-a-fundadora", label: "A Fundadora" },
    // { href: "#midia", label: "MÍDIA" },
    { href: "/contato", label: t('common.contact') },
    { href: "/blog", label: t('nav.blog') },
    // { href: "#formacoes", label: "FORMAÇÕES" }
  ];

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname === href || location.pathname.startsWith(`${href}/`);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleMobileMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    handleAnchorClick(e, href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full transition-[background-color,box-shadow,border-color] duration-500',
        isMobileMenuOpen ? 'z-[60]' : 'z-50',
        isSolid
          ? 'border-b border-gold-leaf/20 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] shadow-xl dark:border-gold-leaf/30 dark:bg-jet-fixed dark:bg-none'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="relative z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Abaixo de xl: logo à esquerda, botão do menu à direita (64 px quando compacto) */}
        <div
          className={cn(
            'flex items-center justify-between transition-[height] duration-500 xl:hidden',
            isSolid ? 'h-16' : 'h-24 sm:h-28',
          )}
        >
          <a
            href="/"
            className="flex items-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf"
            aria-label="Instituto AreLuna"
          >
            <img
              src={logoImg}
              srcSet={`${logoImg256} 256w, ${logoImg} 512w`}
              sizes="(min-width:1280px) 170px, 130px"
              alt="Areluna"
              loading="eager"
              decoding="async"
              className={cn('w-auto transition-[height] duration-500', isSolid ? 'h-12' : 'h-20 sm:h-24')}
            />
          </a>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-colors duration-300 hover:border-gold-leaf/60 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf"
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>

        {/* xl+: no topo do hero, logo centrada e menu por baixo; compacto (72 px, uma linha) ao fazer scroll */}
        <div
          className={cn(
            'hidden xl:flex',
            isSolid ? 'h-[72px] flex-row items-center justify-between gap-6' : 'flex-col items-center pb-2 pt-3',
          )}
        >
          <a
            href="/"
            className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf"
            aria-label="Instituto AreLuna"
          >
            <img
              src={logoImg}
              srcSet={`${logoImg256} 256w, ${logoImg} 512w`}
              sizes="(min-width:1280px) 170px, 130px"
              alt="Areluna"
              loading="eager"
              decoding="async"
              className={cn('w-auto transition-[height] duration-500', isSolid ? 'h-14' : 'h-28')}
            />
          </a>

          <nav
            aria-label="Principal"
            className={cn('flex min-w-0 items-center justify-center gap-0.5', !isSolid && 'mt-2')}
          >
            {menuItems.map((item) => {
              const active = isActive(item.href);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative inline-flex h-11 items-center whitespace-nowrap rounded-full px-2.5 text-xs font-light uppercase tracking-wider transition-colors duration-300 2xl:px-3 2xl:text-sm',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf',
                    'after:absolute after:inset-x-2.5 after:bottom-2 after:h-px after:origin-center after:bg-gold-leaf after:transition-transform after:duration-300',
                    active
                      ? 'text-gold-leaf after:scale-x-100'
                      : 'text-white after:scale-x-0 hover:text-gold-leaf hover:after:scale-x-100',
                  )}
                  onClick={(e) => handleAnchorClick(e, item.href)}
                >
                  {item.label}
                </a>
              );
            })}
            {!isSolid && <HeaderActions compact={false} />}
          </nav>

          {isSolid && (
            <div className="flex shrink-0 items-center">
              <HeaderActions compact />
            </div>
          )}
        </div>
      </div>

      {/* Painel do menu mobile */}
      <div
        id="mobile-menu"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!isMobileMenuOpen}
        className={cn(
          'fixed inset-0 z-40 overflow-y-auto bg-gradient-dark transition-[opacity,visibility] duration-300 motion-reduce:transition-none xl:hidden dark:bg-black dark:bg-none',
          isMobileMenuOpen ? 'visible opacity-100 transition-opacity' : 'invisible opacity-0',
        )}
      >
        <div className="mx-auto flex min-h-full w-full max-w-md flex-col px-4 pb-8 pt-28 sm:px-6">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-vivant text-xs uppercase tracking-[0.18em] text-white/60">Menu</span>
            <div className="flex h-11 items-center">
              <LanguageSwitcher />
            </div>
          </div>

          <nav aria-label="Principal (mobile)" className="flex-1">
            <ul className="divide-y divide-white/10">
              {menuItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      onClick={(e) => handleMobileMenuClick(e, item.href)}
                      className={cn(
                        'group flex min-h-[52px] items-center justify-between gap-4 rounded-lg px-2 text-sm font-light uppercase tracking-wider transition-colors duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf',
                        active ? 'text-gold-leaf' : 'text-white hover:text-gold-leaf',
                      )}
                    >
                      {item.label}
                      <ChevronRight
                        className="h-4 w-4 text-gold-leaf/70 transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-center">
            <Button asChild variant="gold-leaf" size="cta" className="w-full">
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onContactClick}
              >
                {t('header.book_consultation')}
              </a>
            </Button>
            <a
              href={contact.telUrl}
              onClick={onContactClick}
              aria-label={`Telefone: ${contact.phone}`}
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-4 text-sm text-gold-leaf transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {contact.phone}
            </a>
            <p className="px-2 text-xs font-light text-white/70">
              {t('header.subtitle')}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
