const StatsSection = () => {
  const stats = [
    {
      number: "16",
      label: "Especialistas"
    },
    {
      number: "10+",
      label: "Especialidades"
    },
    {
      number: "5000+",
      label: "Pacientes Atendidos"
    },
    {
      number: "15+",
      label: "Anos de Tradição"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-black/20 dark:bg-gray-800/30"></div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-lg"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-vivant text-white mb-4">
            Nossa Excelência
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-vivant-light">
            Números que refletem nossa dedicação em oferecer o melhor cuidado dentário
          </p>
        </div>

        {/* Grid de estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center"
            >
              {/* Número em destaque */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-vivant text-white mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-white/95 font-vivant text-base md:text-lg lg:text-xl font-medium">
                {stat.label}
              </div>

              {/* Linha decorativa */}
              <div className="w-16 h-1 bg-white/60 mx-auto mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Texto de rodapé */}
        <div className="text-center mt-16">
          <p className="text-white/80 font-vivant-light text-lg">
            Construindo sorrisos há mais de uma década
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 