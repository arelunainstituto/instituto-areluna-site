const BeforeAfterSection = () => {
  const cases = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954554/instituto-areluna/23.jpg", // Caso 1 - Antes e Depois
      title: "Transformação Completa",
      description: "Reabilitação oral total com próteses fixas",
      duration: "4 meses",
      treatment: "Implantes e Próteses"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954561/instituto-areluna/24.jpg", // Caso 2 - Antes e Depois
      title: "Sorriso Renovado",
      description: "Implantes e estética dental avançada",
      duration: "3 meses",
      treatment: "Implantes Dentários"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954567/instituto-areluna/25.jpg", // Caso 3 - Antes e Depois
      title: "Mudança de Vida",
      description: "Reconstrução dental personalizada",
      duration: "5 meses",
      treatment: "Reabilitação Total"
    }
  ];

  const facetsCases = [
    {
      id: 1,
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1756465124/Caso_18_qcqzkb.png",
      title: "Sorriso Harmonioso",
      description: "Facetas de porcelana para correção estética",
      duration: "2 semanas",
      treatment: "Facetas de Porcelana"
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1756465123/Caso_13_yqtm3a.png",
      title: "Perfeição Natural",
      description: "Facetas ultrafinas para resultado natural",
      duration: "3 semanas",
      treatment: "Facetas Ultrafinas"
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/dli5oe4qg/image/upload/v1756465119/caso_27_mfkoht.png",
      title: "Elegância Refinada",
      description: "Facetas personalizadas para sorriso perfeito",
      duration: "2 semanas",
      treatment: "Facetas Personalizadas"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-gray-50/50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)',
        backgroundSize: '60px 60px'
      }}></div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-16 right-20 w-48 h-48 bg-gradient-to-br from-[hsl(var(--jet))]/8 to-[hsl(var(--ring))]/4 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-16 left-20 w-36 h-36 bg-gradient-to-br from-[hsl(var(--ring))]/10 to-[hsl(var(--jet))]/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-28 h-28 bg-[hsl(var(--gold-leaf))]/6 rounded-full blur-xl"></div>

      {/* Background text sutil */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden">
        <span className="text-[16rem] font-vivant text-[hsl(var(--gold-leaf))]/5 select-none whitespace-nowrap">
          Transformação
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-20">
          {/* Ornamento superior */}
          <div className="flex justify-center items-center mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
            <div className="w-4 h-4 bg-[hsl(var(--gold-leaf))]/20 rounded-full mx-4 border-2 border-[hsl(var(--gold-leaf))]/40"></div>
            <div className="w-24 h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))]/40 to-[hsl(var(--gold-leaf))]/20 rounded-full"></div>
            <div className="w-3 h-3 bg-[hsl(var(--gold-leaf))]/30 rounded-full mx-3"></div>
            <div className="w-24 h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))]/20 to-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
            <div className="w-4 h-4 bg-[hsl(var(--gold-leaf))]/20 rounded-full mx-4 border-2 border-[hsl(var(--gold-leaf))]/40"></div>
            <div className="w-12 h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))]/40 to-transparent rounded-full"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-vivant text-jet dark:text-gray-200 mb-6 drop-shadow-sm">
            Galeria de Sorrisos
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] mx-auto mb-6 sm:mb-8 rounded-full"></div>

          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-vivant text-[hsl(var(--gold-leaf))] dark:text-[hsl(var(--gold-leaf))]/80 mb-4 sm:mb-6">
              Transformações Reais
            </h3>
            <p className="text-base sm:text-lg text-jet/70 dark:text-gray-400 font-vivant-light leading-relaxed">
              Veja como transformamos sorrisos e mudamos vidas com nossos tratamentos avançados.
              Cada caso é único e personalizado para alcançar resultados excepcionais.
            </p>
          </div>
        </div>

        {/* Subtítulo para Implantes */}
        <div className="text-center mb-12">
          <h4 className="text-2xl sm:text-3xl font-vivant text-[hsl(var(--gold-leaf))] dark:text-[hsl(var(--gold-leaf))]/80 mb-2">
            Implantes e Reabilitação
          </h4>
          <div className="w-24 h-px bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] mx-auto rounded-full"></div>
        </div>

        {/* Grid de casos - Implantes */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-20">
          {cases.map((caseItem, index) => (
            <div key={caseItem.id} className="group">
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/8 transition-all duration-500 hover:-translate-y-2 group-hover:backdrop-blur-2xl overflow-hidden">
                {/* Liquid glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent dark:from-white/20 dark:via-white/5 dark:to-transparent rounded-3xl"></div>

                {/* Glass reflection effect */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent dark:from-white/20 dark:to-transparent rounded-t-3xl opacity-60"></div>

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Imagem antes/depois */}
                  <div className="relative overflow-hidden rounded-2xl shadow-xl mb-6">
                    <div className="aspect-[4/5]">
                      <img
                        src={caseItem.image}
                        alt={`${caseItem.title} - Antes e Depois`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Badge do caso */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[hsl(var(--jet))]/90 dark:from-black/70 to-[hsl(var(--ring))]/90 dark:to-gray-900/70 text-white px-4 py-2 rounded-xl shadow-lg dark:shadow-none">
                      <span className="font-vivant font-medium text-xs tracking-wide">CASO {index + 1}</span>
                    </div>

                    {/* Overlay de hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--gold-leaf))]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Informações do caso */}
                  <div className="text-center space-y-4">
                    <h4 className="text-xl font-vivant text-gray-800 dark:text-gray-100 group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 drop-shadow-sm">
                      {caseItem.title}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-vivant-light leading-relaxed">
                      {caseItem.description}
                    </p>

                    {/* Detalhes do tratamento */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/30 dark:border-white/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/10 dark:to-transparent"></div>
                        <div className="relative z-10">
                          <div className="w-6 h-6 bg-[hsl(var(--gold-leaf))]/90 dark:bg-[hsl(var(--gold-leaf))]/70 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h5 className="font-vivant text-[hsl(var(--gold-leaf))] dark:text-[hsl(var(--gold-leaf))]/80 font-medium text-xs mb-1">Duração</h5>
                          <p className="text-xs text-gray-700 dark:text-gray-300">{caseItem.duration}</p>
                        </div>
                      </div>

                      <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/30 dark:border-white/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/10 dark:to-transparent"></div>
                        <div className="relative z-10">
                          <div className="w-6 h-6 bg-[hsl(var(--gold-leaf))]/90 dark:bg-[hsl(var(--gold-leaf))]/70 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </div>
                          <h5 className="font-vivant text-[hsl(var(--gold-leaf))] dark:text-[hsl(var(--gold-leaf))]/80 font-medium text-xs mb-1">Tratamento</h5>
                          <p className="text-xs text-gray-700 dark:text-gray-300">{caseItem.treatment}</p>
                        </div>
                      </div>
                    </div>

                    {/* Linha decorativa */}
                    <div className="w-16 h-px bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Liquid glass border glow */}
                <div className="absolute inset-0 rounded-3xl border border-[hsl(var(--gold-leaf))]/20 dark:border-[hsl(var(--gold-leaf))]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Subtítulo para Facetas */}
        <div className="text-center mb-12">
          <h4 className="text-2xl sm:text-3xl font-vivant text-[hsl(var(--gold-leaf))] dark:text-[hsl(var(--gold-leaf))]/80 mb-2">
            Facetas de Porcelana
          </h4>
          <div className="w-24 h-px bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] mx-auto rounded-full"></div>
        </div>

        {/* Grid de casos - Facetas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {facetsCases.map((caseItem, index) => (
            <div key={caseItem.id} className="group">
              <div className="relative bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 dark:border-white/10 hover:bg-white/15 dark:hover:bg-white/8 transition-all duration-500 hover:-translate-y-2 group-hover:backdrop-blur-2xl overflow-hidden">
                {/* Liquid glass effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent dark:from-white/20 dark:via-white/5 dark:to-transparent rounded-3xl"></div>

                {/* Glass reflection effect */}
                <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/40 to-transparent dark:from-white/20 dark:to-transparent rounded-t-3xl opacity-60"></div>

                {/* Content wrapper */}
                <div className="relative z-10">
                  {/* Imagem antes/depois */}
                  <div className="relative overflow-hidden rounded-2xl shadow-xl mb-6">
                    <div className="aspect-[4/5]">
                      <img
                        src={caseItem.image}
                        alt={`${caseItem.title} - Antes e Depois`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Badge do caso */}
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[hsl(var(--jet))]/90 dark:from-black/70 to-[hsl(var(--ring))]/90 dark:to-gray-900/70 text-white px-4 py-2 rounded-xl shadow-lg dark:shadow-none">
                      <span className="font-vivant font-medium text-xs tracking-wide">CASO {index + 1}</span>
                    </div>

                    {/* Overlay de hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--gold-leaf))]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Informações do caso */}
                  <div className="text-center space-y-4">
                    <h4 className="text-xl font-vivant text-gray-800 dark:text-gray-100 group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 drop-shadow-sm">
                      {caseItem.title}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 font-vivant-light leading-relaxed">
                      {caseItem.description}
                    </p>

                    {/* Detalhes do tratamento */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/30 dark:border-white/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/10 dark:to-transparent"></div>
                        <div className="relative z-10">
                          <div className="w-6 h-6 bg-[hsl(var(--gold-leaf))]/90 dark:bg-[hsl(var(--gold-leaf))]/70 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h5 className="font-vivant text-[hsl(var(--gold-leaf))] dark:text-[hsl(var(--gold-leaf))]/80 font-medium text-xs mb-1">Duração</h5>
                          <p className="text-xs text-gray-700 dark:text-gray-300">{caseItem.duration}</p>
                        </div>
                      </div>

                      <div className="relative bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/30 dark:border-white/20 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/10 dark:to-transparent"></div>
                        <div className="relative z-10">
                          <div className="w-6 h-6 bg-[hsl(var(--gold-leaf))]/90 dark:bg-[hsl(var(--gold-leaf))]/70 rounded-full flex items-center justify-center mx-auto mb-2">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </div>
                          <h5 className="font-vivant text-[hsl(var(--gold-leaf))] dark:text-[hsl(var(--gold-leaf))]/80 font-medium text-xs mb-1">Tratamento</h5>
                          <p className="text-xs text-gray-700 dark:text-gray-300">{caseItem.treatment}</p>
                        </div>
                      </div>
                    </div>

                    {/* Linha decorativa */}
                    <div className="w-16 h-px bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] mx-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>

                {/* Liquid glass border glow */}
                <div className="absolute inset-0 rounded-3xl border border-[hsl(var(--gold-leaf))]/20 dark:border-[hsl(var(--gold-leaf))]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black rounded-3xl px-12 py-16 shadow-2xl dark:shadow-none relative overflow-hidden">
            {/* Elementos decorativos */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/15 dark:bg-white/8 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-vivant text-white mb-6 drop-shadow-lg">
                Sua Transformação Começa Aqui
              </h3>
              <p className="text-white/95 dark:text-white/90 font-vivant-light text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
                Agende sua consulta e descubra como podemos transformar seu sorriso com resultados naturais e duradouros.
              </p>

              <button className="bg-white/95 dark:bg-gray-100/95 text-[hsl(var(--gold-leaf))] font-vivant font-semibold px-12 py-6 rounded-2xl hover:bg-white dark:hover:bg-gray-100 transition-all duration-500 hover:scale-105 shadow-2xl dark:shadow-none border border-white/20 dark:border-gray-100/20">
                AGENDAR AVALIAÇÃO GRATUITA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;