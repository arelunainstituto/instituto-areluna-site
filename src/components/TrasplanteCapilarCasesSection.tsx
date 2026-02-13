import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import caso1 from "@/assets/transplante-caso-1.jpg";
import caso2 from "@/assets/transplante-caso-2.png";
import caso3 from "@/assets/transplante-caso-3.jpg";

const TrasplanteCapilarCasesSection = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const { t } = useTranslation('hair_transplant_page');

  const cases = [
    {
      id: 1,
      title: "Caso 1",
      description: t('cases.items.case1.description'),
      image: caso1,
      details: t('cases.items.case1.details')
    },
    {
      id: 2,
      title: "Caso 2",
      description: t('cases.items.case2.description'),
      image: caso2,
      details: t('cases.items.case2.details')
    },
    {
      id: 3,
      title: "Caso 3",
      description: t('cases.items.case3.description'),
      image: caso3,
      details: t('cases.items.case3.details')
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 -right-20 w-60 h-60 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/10 to-[hsl(var(--ring))]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-[hsl(var(--jet))]/8 to-[hsl(var(--gold-leaf))]/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Background text sutil */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden">
        <span className="text-[12rem] xs:text-[14rem] sm:text-[16rem] font-vivant text-[hsl(var(--gold-leaf))]/[0.02] select-none whitespace-nowrap">
          Casos
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge superior */}
          <div className="inline-flex items-center bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[hsl(var(--gold-leaf))]/25 shadow-lg mb-6">
            <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full mr-3"></div>
            <span className="text-[hsl(var(--gold-leaf))] font-vivant text-sm font-medium tracking-wide">
              {t('cases.badge')}
            </span>
          </div>

          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-vivant text-jet dark:text-white mb-6 leading-tight">
            {t('cases.title_start')}
            <span className="block text-[hsl(var(--gold-leaf))] drop-shadow-sm">
              {t('cases.title_highlight')}
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] mx-auto mb-6 rounded-full"></div>

          <p className="text-base sm:text-lg text-jet/70 dark:text-gray-300 font-vivant-light leading-relaxed max-w-3xl mx-auto">
            {t('cases.description')}
          </p>
        </div>

        {/* Grid de casos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-[hsl(var(--gold-leaf))]/10 dark:border-[hsl(var(--gold-leaf))]/30 cursor-pointer transform hover:scale-[1.02]"
              onClick={() => setSelectedCase(selectedCase === caseItem.id ? null : caseItem.id)}
            >
              {/* Imagem do caso */}
              <div className="aspect-[15/18] overflow-hidden relative">
                <img
                  src={caseItem.image}
                  alt={`${caseItem.title} - Transplante Capilar FUE`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Badge do caso */}
                <div className="absolute top-4 left-4 bg-[hsl(var(--gold-leaf))] text-white px-3 py-1.5 rounded-full text-xs font-vivant font-medium shadow-lg">
                  {caseItem.title}
                </div>

                {/* Ícone de expansão */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                  <svg className="w-4 h-4 text-[hsl(var(--gold-leaf))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-vivant text-jet dark:text-white mb-2 group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300">
                  {caseItem.description}
                </h3>

                {/* Detalhes expandidos */}
                <div className={`overflow-hidden transition-all duration-500 ${selectedCase === caseItem.id ? 'max-h-24 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="pt-2 border-t border-[hsl(var(--gold-leaf))]/20">
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-vivant-light leading-relaxed">
                      {caseItem.details}
                    </p>
                  </div>
                </div>

                {/* Indicador de clique */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full animate-pulse"></div>
                    <span className="text-xs text-[hsl(var(--gold-leaf))] font-vivant-light">
                      FUE Premium
                    </span>
                  </div>

                  <div className={`transform transition-transform duration-300 ${selectedCase === caseItem.id ? 'rotate-180' : ''
                    }`}>
                    <svg className="w-4 h-4 text-[hsl(var(--gold-leaf))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Elementos decorativos do card */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-[hsl(var(--gold-leaf))] rounded-full opacity-70"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-amber-400 rounded-full opacity-50"></div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-gradient-to-br from-[hsl(var(--gold-leaf))]/5 to-[hsl(var(--ring))]/5 dark:from-[hsl(var(--gold-leaf))]/10 dark:to-[hsl(var(--ring))]/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[hsl(var(--gold-leaf))]/20 max-w-2xl mx-auto">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-vivant text-jet dark:text-white mb-3 sm:mb-4">
              {t('cases.cta.title')}
            </h3>
            <p className="text-sm xs:text-base text-gray-600 dark:text-gray-400 mb-6">
              {t('cases.cta.description')}
            </p>
            <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 bg-[hsl(var(--gold-leaf))] hover:bg-amber-500 text-white rounded-xl transition-all duration-300 font-vivant-light tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105">
                {t('cases.cta.button')}
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrasplanteCapilarCasesSection;