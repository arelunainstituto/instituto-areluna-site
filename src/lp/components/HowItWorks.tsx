const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 md:mb-12">
            Como funciona o{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              tratamento All-on-Four
            </span>
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-premium">
            <p className="font-vivant-light text-lg md:text-xl text-foreground leading-relaxed mb-8">
              O All-on-Four permite fixar uma prótese total sobre apenas 4 implantes dentários 
              estrategicamente posicionados. Com tecnologia digital, planeamos o seu novo sorriso 
              com planeamento digital. Em casos selecionados, após avaliação clínica e exames, pode ser colocada uma prótese fixa provisória no próprio dia ou 
              no dia seguinte.
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-vivant-medium text-xl font-medium text-foreground mb-2">
                  Avaliação Digital
                </h3>
                <p className="text-muted-foreground">
                  Digitalização 3D e planeamento personalizado
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Implantes Precisos
                </h3>
                <p className="text-muted-foreground">
                  Colocação de 4 implantes com cirurgia guiada
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Prótese provisória
                </h3>
                <p className="text-muted-foreground">
                  Em casos selecionados, no próprio dia ou no dia seguinte
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;