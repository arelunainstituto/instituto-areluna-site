const ContatoSection = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white via-gray-50/30 to-white dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-900 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)', 
        backgroundSize: '40px 40px'
      }}></div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 -right-20 w-60 h-60 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/10 to-amber-400/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-amber-400/8 to-[hsl(var(--gold-leaf))]/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>

      {/* Background text sutil */}
      <div className="absolute top-32 left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden">
        <span className="text-[12rem] xs:text-[14rem] sm:text-[16rem] font-vivant text-[hsl(var(--gold-leaf))]/[0.02] select-none whitespace-nowrap">
          Contato
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge superior */}
          <div className="inline-flex items-center bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[hsl(var(--gold-leaf))]/25 shadow-lg mb-6">
            <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full mr-3"></div>
            <span className="text-[hsl(var(--gold-leaf))] font-vivant text-sm font-medium tracking-wide">
              INFORMAÇÕES DE CONTATO
            </span>
          </div>

          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-vivant text-jet dark:text-white mb-6 leading-tight">
            Como Nos
            <span className="block text-[hsl(var(--gold-leaf))] drop-shadow-sm">
              Encontrar
            </span>
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--gold-leaf))] to-amber-400 mx-auto mb-6 rounded-full"></div>
          
          <p className="text-base sm:text-lg text-jet/70 dark:text-gray-300 font-vivant-light leading-relaxed max-w-3xl mx-auto">
            Estamos localizados no coração de Évora, prontos para recebê-lo com o mais alto padrão 
            de atendimento e tecnologia avançada.
          </p>
        </div>

        {/* Grid de informações de contato */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto mb-16">
          {/* Coluna 1 - Contato e Horários */}
          <div className="space-y-8">
            {/* Informações de Contato */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-[hsl(var(--gold-leaf))]/10 dark:border-[hsl(var(--gold-leaf))]/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[hsl(var(--gold-leaf))]/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[hsl(var(--gold-leaf))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-vivant text-jet dark:text-white">
                  Contacto Direto
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-jet/80 dark:text-gray-300">
                  <svg className="w-5 h-5 text-[hsl(var(--gold-leaf))] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="font-vivant-light">+351 266 000 000</span>
                </div>
                <div className="flex items-center text-jet/80 dark:text-gray-300">
                  <svg className="w-5 h-5 text-[hsl(var(--gold-leaf))] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="font-vivant-light">geral@areluna.pt</span>
                </div>
                <div className="flex items-center text-jet/80 dark:text-gray-300">
                  <svg className="w-5 h-5 text-[hsl(var(--gold-leaf))] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="font-vivant-light">WhatsApp: +351 900 000 000</span>
                </div>
              </div>
            </div>

            {/* Horários de Funcionamento */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-[hsl(var(--gold-leaf))]/10 dark:border-[hsl(var(--gold-leaf))]/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[hsl(var(--gold-leaf))]/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[hsl(var(--gold-leaf))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-vivant text-jet dark:text-white">
                  Horários
                </h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center text-jet/80 dark:text-gray-300">
                  <span className="font-vivant">Segunda - Sexta</span>
                  <span className="font-vivant-light text-[hsl(var(--gold-leaf))]">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center text-jet/80 dark:text-gray-300">
                  <span className="font-vivant">Sábado</span>
                  <span className="font-vivant-light text-[hsl(var(--gold-leaf))]">09:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center text-jet/80 dark:text-gray-300">
                  <span className="font-vivant">Domingo</span>
                  <span className="font-vivant-light text-gray-500">Fechado</span>
                </div>
                <div className="mt-4 p-3 bg-[hsl(var(--gold-leaf))]/10 rounded-xl">
                  <p className="text-xs text-jet/70 dark:text-gray-400 font-vivant-light">
                    Consultas de urgência disponíveis mediante agendamento prévio
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2 - Localização */}
          <div className="space-y-8">
            {/* Morada */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-[hsl(var(--gold-leaf))]/10 dark:border-[hsl(var(--gold-leaf))]/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[hsl(var(--gold-leaf))]/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[hsl(var(--gold-leaf))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-vivant text-jet dark:text-white">
                  Localização
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="text-jet/80 dark:text-gray-300">
                  <p className="font-vivant text-lg mb-2">Instituto Areluna</p>
                  <p className="font-vivant-light">Rua Serpa Pinto, 123</p>
                  <p className="font-vivant-light">7000-000 Évora</p>
                  <p className="font-vivant-light">Portugal</p>
                </div>
                
                <div className="mt-6">
                  <button className="px-6 py-3 bg-[hsl(var(--gold-leaf))] hover:bg-amber-500 text-white rounded-xl transition-all duration-300 font-vivant-light text-sm shadow-lg hover:shadow-xl transform hover:scale-105">
                    VER NO MAPA
                  </button>
                </div>
              </div>
            </div>

            {/* Transportes */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-lg border border-[hsl(var(--gold-leaf))]/10 dark:border-[hsl(var(--gold-leaf))]/30">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[hsl(var(--gold-leaf))]/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[hsl(var(--gold-leaf))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-vivant text-jet dark:text-white">
                  Como Chegar
                </h3>
              </div>
              
              <div className="space-y-3 text-jet/80 dark:text-gray-300 font-vivant-light">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[hsl(var(--gold-leaf))] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  <span>Estacionamento gratuito disponível</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[hsl(var(--gold-leaf))] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Paragem de autocarro a 50m</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[hsl(var(--gold-leaf))] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>5 minutos a pé do centro histórico</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-[hsl(var(--gold-leaf))] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Acesso para pessoas com mobilidade reduzida</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[hsl(var(--gold-leaf))]/5 to-amber-400/5 dark:from-[hsl(var(--gold-leaf))]/10 dark:to-amber-400/10 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-[hsl(var(--gold-leaf))]/20 max-w-2xl mx-auto">
            <h3 className="text-xl xs:text-2xl sm:text-3xl font-vivant text-jet dark:text-white mb-3 sm:mb-4">
              Pronto para transformar o seu sorriso?
            </h3>
            <p className="text-sm xs:text-base text-gray-600 dark:text-gray-400 mb-6">
              Agende a sua consulta gratuita e descubra como podemos ajudá-lo 
              a alcançar o sorriso perfeito.
            </p>
            <button className="px-8 py-4 bg-[hsl(var(--gold-leaf))] hover:bg-amber-500 text-white rounded-xl transition-all duration-300 font-vivant-light tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105">
              MARCAR CONSULTA GRATUITA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContatoSection;