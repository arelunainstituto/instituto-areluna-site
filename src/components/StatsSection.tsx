const StatsSection = () => {
  const stats = [
    {
      value: "14",
      label: "Especialistas"
    },
    {
      value: "22",
      label: "especialidades"
    },
    {
      prefix: "+ de ",
      value: "25 mil",
      label: "pacientes atendidos"
    },
    {
      prefix: "+ de ",
      value: "24 anos",
      label: "de tradição"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-black/20 dark:bg-gray-800/30"></div>

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
              <div className="flex items-baseline justify-center gap-2 mb-4 group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
                {stat.prefix && (
                  <span className="text-2xl md:text-3xl font-vivant-light text-white/90">
                    {stat.prefix}
                  </span>
                )}
                <span className="text-5xl md:text-5xl lg:text-5xl font-vivant text-white">
                  {stat.value}
                </span>
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
            Construindo sorrisos há mais de duas décadas
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection; 