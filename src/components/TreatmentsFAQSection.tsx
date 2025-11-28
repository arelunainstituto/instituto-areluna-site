import { useState } from "react";

const TreatmentsFAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Quanto tempo demora um tratamento ortodôntico?",
      answer: "O tempo varia conforme a complexidade do caso, geralmente entre 12 a 30 meses. Com alinhadores invisíveis, pode ser mais rápido (12-24 meses). Durante a consulta inicial, fornecemos uma estimativa mais precisa baseada na sua situação específica."
    },
    {
      question: "Os implantes dentários doem?",
      answer: "O procedimento é realizado com anestesia local, pelo que não sentirá dor durante a cirurgia. No pós-operatório, pode haver algum desconforto que é facilmente controlado com medicação. A maioria dos pacientes retoma as atividades normais em 2-3 dias."
    },
    {
      question: "Quanto custam as facetas de porcelana?",
      answer: "O preço das facetas varia conforme o número de dentes e complexidade do caso, desde €600 por dente. Oferecemos planos de pagamento flexíveis e uma consulta inicial gratuita para orçamento personalizado."
    },
    {
      question: "O branqueamento dentário é seguro?",
      answer: "Sim, quando realizado por profissionais qualificados. Utilizamos técnicas aprovadas e produtos de qualidade farmacêutica. Pode haver sensibilidade temporária, que desaparece em poucos dias. Fazemos sempre uma avaliação prévia da saúde dentária."
    },
    {
      question: "Preciso de enxerto ósseo para colocar implantes?",
      answer: "Depende da quantidade e qualidade do osso disponível. Cerca de 30% dos pacientes necessitam de enxerto. Utilizamos técnicas avançadas de regeneração óssea que aumentam significativamente as possibilidades de colocação de implantes."
    },
    {
      question: "Qual a durabilidade dos tratamentos estéticos?",
      answer: "Facetas de porcelana duram 15-20 anos, branqueamento 2-3 anos (dependendo dos hábitos), implantes podem durar toda a vida com cuidados adequados. Oferecemos garantias e programas de manutenção preventiva."
    },
    {
      question: "Aceitam seguros de saúde?",
      answer: "Sim, trabalhamos com os principais seguros de saúde portugueses. Verificamos sempre a cobertura antes do tratamento e ajudamos com os procedimentos de reembolso. Contacte-nos para confirmar o seu seguro específico."
    },
    {
      question: "É possível fazer varios tratamentos em simultâneo?",
      answer: "Sim, frequentemente combinamos tratamentos para otimizar resultados e reduzir tempo total. Por exemplo, implantes com branqueamento, ou ortodontia seguida de facetas. Criamos um plano de tratamento integrado personalizado."
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
      <div className="absolute top-20 right-16 w-40 h-40 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/8 to-amber-400/4 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-32 h-32 bg-gradient-to-br from-amber-400/6 to-[hsl(var(--gold-leaf))]/4 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      {/* Background text sutil */}
      <div className="absolute top-40 -right-32 pointer-events-none overflow-hidden">
        <span className="text-[12rem] xs:text-[14rem] sm:text-[16rem] font-vivant text-[hsl(var(--gold-leaf))]/5 select-none whitespace-nowrap">
          Pergun
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
            Perguntas Frequentes
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--gold-leaf))] to-amber-400 mx-auto mb-6 sm:mb-8 rounded-full"></div>

          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-2xl xs:text-3xl sm:text-4xl font-vivant text-[hsl(var(--gold-leaf))] mb-4 sm:mb-6">
              Esclarecemos Suas Dúvidas
            </h3>
            <p className="text-base sm:text-lg text-jet/70 dark:text-gray-300 font-vivant-light leading-relaxed">
              Reunimos as perguntas mais comuns sobre nossos tratamentos.
              Não encontrou a resposta que procura? Entre em contacto connosco.
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
            <div className="bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[hsl(var(--gold-leaf))]/20">
              <h3 className="text-xl xs:text-2xl sm:text-3xl font-vivant text-white mb-3 sm:mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-sm xs:text-base text-gray-300 mb-6 max-w-xl mx-auto">
                Nossa equipa está disponível para esclarecer todas as suas questões
                numa consulta personalizada e gratuita.
              </p>
              <div className="flex flex-col xs:flex-row gap-3 xs:gap-4 justify-center">
                <button className="px-6 py-3 bg-[hsl(var(--gold-leaf))] hover:bg-amber-500 text-white rounded-xl transition-all duration-300 font-vivant-light tracking-wide">
                  AGENDAR CONSULTA
                </button>
                <button className="px-6 py-3 border border-[hsl(var(--gold-leaf))] text-[hsl(var(--gold-leaf))] hover:bg-[hsl(var(--gold-leaf))]/10 dark:hover:bg-[hsl(var(--gold-leaf))]/20 rounded-xl transition-all duration-300 font-vivant-light tracking-wide">
                  CONTACTAR POR WHATSAPP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsFAQSection;