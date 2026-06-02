const Authority = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 md:mb-12">
            Instituto Areluna,{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              especialista em implantes dentários
            </span>
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-premium">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              Com vasta experiência em implantologia e utilizando tecnologia de ponta,
              o Instituto Areluna realiza procedimentos com segurança, conforto e resultados excepcionais.
              Especialista em reabilitação oral completa e devolução da confiança no sorriso,
              tudo num ambiente moderno e acolhedor.
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🦷</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Técnica All-on-Four
                </h3>
                <p className="text-muted-foreground">
                  Reabilitação completa com apenas 4 implantes
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">👨‍⚕️</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Equipa Especializada
                </h3>
                <p className="text-muted-foreground">
                  Cirurgiões experientes em implantologia
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">⚡</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Resultados em 24h
                </h3>
                <p className="text-muted-foreground">
                  Sorriso fixo e funcional no mesmo dia
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Técnica All-on-Four
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Sem Enxertos Ósseos
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Recuperação Rápida
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Resultados Duradouros
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;