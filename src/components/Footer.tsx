import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/site";
import logoImg from '@/assets/logo.webp';

/**
 * Rodapé global. Inspiração: blocos "footer" do catálogo 21st.dev (rodapé em
 * colunas com marca + redes, links, contactos e faixa legal), com os tokens AreLuna.
 * Todos os links têm alvo de toque >= 44 px.
 */
const SOCIAL_LINKS = [
  { href: "https://www.facebook.com/institutoareluna", label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
  { href: "https://www.instagram.com/institutoareluna", label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { href: "https://www.tiktok.com/@institutoareluna", label: "TikTok", path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.35-1.17.82-1.51 1.45-.7.98-.56 2.32.19 3.27.73 1 1.99 1.58 3.26 1.51 1.41-.02 2.77-1.1 2.87-2.6v-.07c.01-4.13.01-8.25.01-12.38 3.32-.01 6.64-.01 9.96-.01z" },
  { href: "https://www.youtube.com/@institutoareluna", label: "YouTube", path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
  { href: "https://x.com/institutoarelun", label: "X (Twitter)", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

const headingClasses = "mb-4 font-vivant text-xs uppercase tracking-[0.18em] text-gold-leaf";
const linkClasses =
  "inline-flex min-h-[44px] items-center rounded-md font-vivant-light text-sm text-white/70 transition-colors duration-300 hover:text-gold-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf";
const legalLinkClasses =
  "inline-flex min-h-[44px] items-center rounded-md font-vivant-light text-sm text-white/60 transition-colors duration-300 hover:text-gold-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf";
const iconBoxClasses =
  "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold-leaf/30 bg-gold-leaf/10 text-gold-leaf [&_svg]:h-4 [&_svg]:w-4";

const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { href: "/", label: t('nav.institute') },
    { href: "/tratamentos", label: t('nav.treatments') },
    { href: "/turismo-dentario", label: t('nav.tourism') },
    { href: "/#casos-clinicos", label: t('nav.before_after') },
    { href: "/sobre-a-fundadora", label: "Sobre a Fundadora" },
    { href: "/contato", label: t('common.contact') },
  ];

  return (
    <footer className="border-t border-gold-leaf/20 bg-jet-fixed text-white dark:bg-black">
      <Container width="wide">
        {/* Seção principal do footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* Logo e descrição */}
          <div className="sm:col-span-2 lg:col-span-4">
            <img
              src={logoImg}
              alt="Areluna"
              loading="lazy"
              decoding="async"
              className="mb-6 h-20 w-auto"
            />
            <h3 className="mb-3 font-vivant text-xl text-gold-leaf">
              {t('footer.main_title')}
            </h3>
            <p className="max-w-md font-vivant-light text-sm leading-relaxed text-white/70 sm:text-base">
              {t('footer.description')}
            </p>

            {/* Redes sociais */}
            <ul className="mt-6 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold-leaf/40 text-gold-leaf transition-colors duration-300 hover:border-gold-leaf hover:bg-gold-leaf hover:text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <svg className="h-[18px] w-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links rápidos */}
          <nav aria-label={t('footer.quick_links')} className="lg:col-span-2">
            <h4 className={headingClasses}>{t('footer.quick_links')}</h4>
            <ul>
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClasses}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Informações de contato */}
          <div className="lg:col-span-3">
            <h4 className={headingClasses}>{t('common.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className={iconBoxClasses} aria-hidden="true"><MapPin /></span>
                <div className="space-y-2 font-vivant-light text-sm leading-relaxed text-white/70">
                  <p><strong className="font-vivant font-normal text-white/90">{t('footer.units.porto_label', 'Porto (Sede):')}</strong> {t('footer.units.porto_address', 'Rua de Júlio Dinis, 194 R/C, 4050-024 Porto')}</p>
                  <p><strong className="font-vivant font-normal text-white/90">{t('footer.units.lisboa_label', 'Lisboa (Nova Unidade):')}</strong> {t('footer.units.lisboa_address', 'Alameda das Linhas de Torres / Lumiar, Lisboa')}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className={iconBoxClasses} aria-hidden="true"><Phone /></span>
                <a href="tel:+351220430090" className={linkClasses}>
                  +351 220 430 090
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className={iconBoxClasses} aria-hidden="true"><Mail /></span>
                <a href="mailto:rececao@institutoareluna.pt" className={`${linkClasses} break-all`}>
                  rececao@institutoareluna.pt
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className={iconBoxClasses} aria-hidden="true"><Clock /></span>
                <p className="pt-1.5 font-vivant-light text-sm leading-relaxed text-white/70">
                  <Trans i18nKey="footer.hours" components={{ br: <br /> }} />
                </p>
              </li>
            </ul>
          </div>

          {/* Entidade Reguladora & Dados da Sociedade */}
          <div className="lg:col-span-3">
            <h4 className={headingClasses}>{t('footer.units.compliance_title', 'Conformidade & Regulação')}</h4>
            <ul className="space-y-2 font-vivant-light text-sm text-white/70">
              <li className="font-vivant text-white/85">
                {t('footer.units.company_name', 'Instituto AreLuna Lda. · NIPC 516 161 637')}
              </li>
              <li>
                <span className="font-vivant text-white/90">{t('footer.reg_number')}</span> E161637
              </li>
              <li>
                <span className="font-vivant text-white/90">{t('footer.license_number')}</span> 21593/2022
              </li>
            </ul>
            <a
              href="https://www.livroreclamacoes.pt/Inicio/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-[44px] items-center rounded-md font-vivant-light text-sm text-gold-leaf underline underline-offset-4 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf"
            >
              {t('footer.complaints_book')}
            </a>
          </div>
        </div>

        {/* Seção inferior */}
        <div className="flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          {/* Copyright */}
          <p className="text-center font-vivant-light text-sm text-white/60 md:text-left">
            © {new Date().getFullYear()} Instituto Areluna - {t('footer.main_title')}. {t('footer.rights_reserved')}
          </p>

          {/* Links legais */}
          <nav aria-label={t('footer.privacy_policy')} className="flex flex-wrap justify-center gap-x-6">
            <Link to="/privacidade" className={legalLinkClasses}>
              {t('footer.privacy_policy')}
            </Link>
            <Link to="/privacidade" className={legalLinkClasses}>
              {t('footer.data_protection')}
            </Link>
            <Link to="/termos" className={legalLinkClasses}>
              {t('footer.terms_of_use')}
            </Link>
            <Link to="/privacidade" className={legalLinkClasses}>
              {t('footer.cookies')}
            </Link>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
