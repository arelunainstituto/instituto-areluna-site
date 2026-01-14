import { useState } from "react";
import { useTranslation } from "react-i18next";

const TrasplanteCapilarFAQSection = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: t('hair_transplant_page.faq.list.fue_technique.question'),
      answer: t('hair_transplant_page.faq.list.fue_technique.answer')
    },
    {
      question: t('hair_transplant_page.faq.list.pain.question'),
      answer: t('hair_transplant_page.faq.list.pain.answer')
    },
    {
      question: t('hair_transplant_page.faq.list.results_time.question'),
      answer: t('hair_transplant_page.faq.list.results_time.answer')
    },
    {
      question: t('hair_transplant_page.faq.list.sessions.question'),
      answer: t('hair_transplant_page.faq.list.sessions.answer')
    },
    {
      question: t('hair_transplant_page.faq.list.definitive.question'),
      answer: t('hair_transplant_page.faq.list.definitive.answer')
    },
    {
      question: t('hair_transplant_page.faq.list.recovery.question'),
      answer: t('hair_transplant_page.faq.list.recovery.answer')
    },
    {
      question: t('hair_transplant_page.faq.list.donor_area.question'),
      answer: t('hair_transplant_page.faq.list.donor_area.answer')
    },
    {
      question: t('hair_transplant_page.faq.list.natural_look.question'),
      answer: t('hair_transplant_page.faq.list.natural_look.answer')
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50/50 via-white to-gray-50/50 dark:from-gray-800/50 dark:via-gray-900 dark:to-gray-800/50 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 right-16 w-40 h-40 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/8 to-[hsl(var(--ring))]/4 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-32 h-32 bg-gradient-to-br from-[hsl(var(--jet))]/6 to-[hsl(var(--gold-leaf))]/4 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Background text sutil */}
      <div className="absolute top-40 -right-32 pointer-events-none overflow-hidden">
        <span className="text-[12rem] xs:text-[14rem] sm:text-[16rem] font-vivant text-[hsl(var(--gold-leaf))]/5 select-none whitespace-nowrap">
          Capilar
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Ornamento superior */}
          <div className="flex justify-center items-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[hsl(var(--gold-leaf))]/20 rounded-full mx-3 sm:mx-4 border-2 border-[hsl(var(--gold-leaf))]/40"></div>
            <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))]/40 to-[hsl(var(--gold-leaf))]/20 rounded-full"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[hsl(var(--gold-leaf))]/30 rounded-full mx-2 sm:mx-3"></div>
            <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))]/20 to-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[hsl(var(--gold-leaf))]/20 rounded-full mx-3 sm:mx-4 border-2 border-[hsl(var(--gold-leaf))]/40"></div>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))]/40 to-transparent rounded-full"></div>
          </div>

          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-vivant text-jet dark:text-white mb-6">
            {t('hair_transplant_page.faq.title')}
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] mx-auto mb-6 sm:mb-8 rounded-full"></div>

          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-2xl xs:text-3xl sm:text-4xl font-vivant text-jet mb-4 sm:mb-6">
              {t('hair_transplant_page.faq.subtitle')}
            </h3>
            <p className="text-base sm:text-lg text-jet/70 dark:text-gray-300 font-vivant-light leading-relaxed">
              {t('hair_transplant_page.faq.description')}
            </p>
          </div>
        </div>

        {/* Grid principal */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 sm:space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-[hsl(var(--gold-leaf))]/10 dark:border-[hsl(var(--gold-leaf))]/30 overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-4 xs:px-6 sm:px-8 py-4 xs:py-6 sm:py-8 text-left flex items-center justify-between hover:bg-[hsl(var(--gold-leaf))]/5 dark:hover:bg-[hsl(var(--gold-leaf))]/10 transition-all duration-300 group min-h-[64px]"
                >
                  <h3 className="text-sm xs:text-base sm:text-lg lg:text-xl font-vivant text-jet dark:text-white group-hover:text-[hsl(var(--gold-leaf))] dark:group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 pr-3 xs:pr-4 leading-tight">
                    {faq.question}
                  </h3>
                  <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-[hsl(var(--gold-leaf))]/10 dark:bg-[hsl(var(--gold-leaf))]/20 transition-all duration-300 ${openFaq === index ? 'rotate-45 bg-[hsl(var(--gold-leaf))] dark:bg-[hsl(var(--gold-leaf))]' : 'group-hover:bg-[hsl(var(--gold-leaf))]/20 dark:group-hover:bg-[hsl(var(--gold-leaf))]/30'
                    }`}>
                    <svg
                      className={`w-4 h-4 transition-colors duration-300 ${openFaq === index ? 'text-white' : 'text-[hsl(var(--gold-leaf))]'
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="px-4 xs:px-6 sm:px-8 pb-4 xs:pb-6 sm:pb-8">
                    <div className="w-full h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))]/20 via-[hsl(var(--gold-leaf))]/40 to-[hsl(var(--gold-leaf))]/20 mb-3 xs:mb-4 sm:mb-6"></div>
                    <p className="text-xs xs:text-sm sm:text-base text-gray-600 dark:text-gray-400 font-vivant-light leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA final */}
          <div className="text-center mt-12 sm:mt-16">
            <div className="bg-gradient-to-br from-[hsl(var(--gold-leaf))]/5 to-[hsl(var(--ring))]/5 dark:from-[hsl(var(--gold-leaf))]/10 dark:to-[hsl(var(--ring))]/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[hsl(var(--gold-leaf))]/20">
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-vivant text-jet dark:text-white mb-3 sm:mb-4">
                {t('hair_transplant_page.faq.cta_title')}
              </h3>
              <p className="text-sm xs:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-xl mx-auto">
                {t('hair_transplant_page.faq.cta_desc')}
              </p>
              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
                <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
                  <button className="px-6 py-3 bg-[hsl(var(--gold-leaf))] hover:bg-amber-500 text-white rounded-xl transition-all duration-300 font-vivant-light tracking-wide">
                    {t('hair_transplant_page.faq.cta_button_schedule')}
                  </button>
                </a>
                <button
                  className="px-6 py-3 border border-[hsl(var(--gold-leaf))] text-[hsl(var(--gold-leaf))] hover:bg-[hsl(var(--gold-leaf))]/10 dark:hover:bg-[hsl(var(--gold-leaf))]/20 rounded-xl transition-all duration-300 font-vivant-light tracking-wide"
                  onClick={() => document.getElementById('transplante')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('hair_transplant_page.faq.cta_button_results')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrasplanteCapilarFAQSection;