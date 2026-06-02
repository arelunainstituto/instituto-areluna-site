const HowItWorksOrtodontia = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 md:mb-12">
            O processo que transforma{" "}
            <span className="text-transparent bg-gradient-gold bg-clip-text">
              sorrisos de forma invisível
            </span>
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-premium">
            <p className="font-vivant-light text-lg md:text-xl text-foreground leading-relaxed mb-8">
              Com alinhadores transparentes personalizados, movimentamos os dentes gradualmente 
              até à posição ideal. Cada alinhador é feito especialmente para si com tecnologia
              3D, proporcionando um tratamento confortável e praticamente invisível.
            </p>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
                <h3 className="font-vivant-medium text-xl font-medium text-foreground mb-2">
                  Escaneamento 3D
                </h3>
                <p className="text-muted-foreground">
                  Molde digital preciso e simulação do resultado
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Alinhadores Personalizados
                </h3>
                <p className="text-muted-foreground">
                  Fabricação sob medida para cada etapa do tratamento
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                  Acompanhamento Regular
                </h3>
                <p className="text-muted-foreground">
                  Troca dos alinhadores a cada 2 semanas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksOrtodontia;