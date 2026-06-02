const AuthorityEstetica = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 md:mb-12">
            Especialistas em estética,{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              resultados naturais e duradouros
            </span>
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-premium">
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
              Com uma equipa especializada em estética dental e tecnologia digital 
              de última geração, criamos sorrisos harmoniosos com facetas dentárias 
              de alta qualidade. Tudo com segurança, precisão e num ambiente 
              acolhedor e exclusivo.
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">✨</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Design Digital
                </h3>
                <p className="text-muted-foreground">
                  Planejamento 3D do sorriso ideal
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">👨‍⚕️</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Especialistas em Estética
                </h3>
                <p className="text-muted-foreground">
                  Dentistas especializados em facetas
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-3xl">🎯</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Precisão Milimétrica
                </h3>
                <p className="text-muted-foreground">
                  Facetas sob medida para cada dente
                </p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Design Digital do Sorriso
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Facetas Personalizadas
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Preparação Mínima
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Resultado Natural
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorityEstetica;