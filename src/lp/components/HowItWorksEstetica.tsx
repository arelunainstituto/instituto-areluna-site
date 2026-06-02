const HowItWorksEstetica = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 md:mb-12">
            O processo que cria{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              sorrisos perfeitos em poucos dias
            </span>
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-premium">
            <p className="font-vivant-light text-lg md:text-xl text-foreground leading-relaxed mb-8">
              As facetas dentárias são lâminas ultrafinas que cobrem a superfície dos dentes, 
              corrigindo formato, cor e pequenos desalinhamentos. Com preparação mínima e 
              tecnologia digital, transformamos o seu sorriso de forma rápida e natural.
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-vivant-medium text-xl font-medium text-foreground mb-2">
                  Planejamento Digital
                </h3>
                <p className="text-muted-foreground">
                  Análise 3D e simulação do novo sorriso
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Preparação Mínima
                </h3>
                <p className="text-muted-foreground">
                  Pequeno desgaste preservando o dente natural
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Aplicação das Facetas
                </h3>
                <p className="text-muted-foreground">
                  Colagem definitiva em poucos dias
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksEstetica;