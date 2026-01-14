
import { Link } from "react-router-dom";
import { useTranslation, Trans } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-jet dark:bg-black text-pure-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-jet via-jet/95 to-jet"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)',
        backgroundSize: '30px 30px'
      }}></div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-[hsl(var(--gold-leaf))]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-[hsl(var(--gold-leaf))]/8 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Seção principal do footer */}
        <div className="py-16 border-b border-pure-white/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954590/instituto-areluna/684037b8-d590-4e39-83d2-b5ce9e85eae9.png"
                  alt="Areluna"
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-auto mb-4"
                />
                <h3 className="text-2xl font-vivant text-[hsl(var(--gold-leaf))] mb-4">
                  {t('footer.main_title')}
                </h3>
                <p className="text-pure-white/70 font-vivant-light leading-relaxed max-w-md">
                  {t('footer.description')}
                </p>
              </div>

              {/* Redes sociais */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/institutoareluna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[hsl(var(--gold-leaf))] rounded-lg flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/institutoareluna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[hsl(var(--gold-leaf))] rounded-lg flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@institutoareluna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[hsl(var(--gold-leaf))] rounded-lg flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 group"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.35-1.17.82-1.51 1.45-.7.98-.56 2.32.19 3.27.73 1 1.99 1.58 3.26 1.51 1.41-.02 2.77-1.1 2.87-2.6v-.07c.01-4.13.01-8.25.01-12.38 3.32-.01 6.64-.01 9.96-.01z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@institutoareluna"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[hsl(var(--gold-leaf))] rounded-lg flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 group"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://x.com/institutoarelun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[hsl(var(--gold-leaf))] rounded-lg flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 group"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="text-lg font-vivant text-[hsl(var(--gold-leaf))] mb-6">{t('footer.quick_links')}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#instituto" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                    {t('nav.institute')}
                  </a>
                </li>
                <li>
                  <a href="#tratamentos" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                    {t('nav.treatments')}
                  </a>
                </li>
                <li>
                  <a href="#turismo" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                    {t('nav.tourism')}
                  </a>
                </li>
                <li>
                  <a href="#antes-depois" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                    {t('nav.before_after')}
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                    {t('common.contact')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Informações de contato e ERS */}
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-vivant text-[hsl(var(--gold-leaf))] mb-6">{t('common.contact')}</h4>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[hsl(var(--gold-leaf))] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-pure-white/70 font-vivant-light text-sm">
                        {t('footer.location')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[hsl(var(--gold-leaf))] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <a href="tel:+351220430090" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light text-sm">
                        +351 220 430 090
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[hsl(var(--gold-leaf))] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <a href="mailto:rececao@institutoareluna.pt" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light text-sm">
                        rececao@institutoareluna.pt
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-[hsl(var(--gold-leaf))] rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-pure-white/70 font-vivant-light text-sm">
                        <Trans i18nKey="footer.hours" components={{ br: <br /> }} />
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Entidade Reguladora */}
              <div>
                <h4 className="text-sm font-vivant text-[hsl(var(--gold-leaf))] mb-3">{t('footer.regulatory_entity')}</h4>
                <ul className="space-y-1">
                  <li className="text-pure-white/70 font-vivant-light text-xs">
                    <span className="font-semibold text-pure-white/90">{t('footer.reg_number')}</span> E161637
                  </li>
                  <li className="text-pure-white/70 font-vivant-light text-xs">
                    <span className="font-semibold text-pure-white/90">{t('footer.license_number')}</span> 21593/2022
                  </li>
                </ul>
                <a
                  href="https://www.livroreclamacoes.pt/Inicio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[hsl(var(--gold-leaf))] hover:text-white transition-colors text-xs font-vivant-light underline underline-offset-4"
                >
                  {t('footer.complaints_book')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Seção inferior */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-pure-white/60 text-sm font-vivant-light text-center md:text-left">
              © 2024 Areluna - Medicina Dentária & Estética Avançada. {t('footer.rights_reserved')}
            </div>

            {/* Links legais */}
            <div className="flex flex-wrap justify-center space-x-6 text-sm">
              <Link to="/privacidade" className="text-pure-white/60 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                {t('footer.privacy_policy')}
              </Link>
              <Link to="/privacidade" className="text-pure-white/60 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                {t('footer.data_protection')}
              </Link>
              <Link to="/termos" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                {t('footer.terms_of_use')}
              </Link>
              <Link to="/privacidade" className="text-pure-white/60 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                {t('footer.cookies')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;