import { useState } from 'react';

const TourismDentarioSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100/40 via-gray-50/60 to-gray-100/40 dark:from-black dark:via-gray-900/60 dark:to-black relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 right-16 w-40 h-40 bg-gradient-to-br from-[hsl(var(--jet))]/15 to-[hsl(var(--ring))]/8 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-32 h-32 bg-gradient-to-br from-[hsl(var(--ring))]/12 to-[hsl(var(--jet))]/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[hsl(var(--gold-leaf))]/8 rounded-full blur-xl"></div>

      {/* Background text sutil */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden">
        <span className="text-[16rem] font-vivant text-[hsl(var(--gold-leaf))]/5 select-none whitespace-nowrap">
          Turismo
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Conteúdo */}
          <div className="order-2 lg:order-1 space-y-6 sm:space-y-8">
            {/* Badge superior */}
            <div className="inline-flex items-center bg-white/70 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-[hsl(var(--gold-leaf))]/25 dark:border-[hsl(var(--gold-leaf))]/40 shadow-lg">
              <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full mr-3"></div>
              <span className="text-[hsl(var(--gold-leaf))] font-vivant text-sm font-medium tracking-wide">
                Em 25 anos de experiência
              </span>
            </div>

            {/* Título principal */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-vivant text-jet dark:text-gray-200 leading-tight">
                Programa
                <span className="block text-[hsl(var(--gold-leaf))] drop-shadow-sm">
                  Turismo Dentário
                </span>
              </h2>

              {/* Linha decorativa */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-px bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] rounded-full"></div>
                <div className="w-3 h-3 bg-[hsl(var(--gold-leaf))]/20 rounded-full border-2 border-[hsl(var(--gold-leaf))]/40"></div>
                <div className="w-32 h-px bg-gradient-to-r from-[hsl(var(--ring))] to-[hsl(var(--jet))] rounded-full"></div>
              </div>
            </div>

            {/* Pergunta principal */}
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-[hsl(var(--gold-leaf))]/15">
              <p className="text-xl md:text-2xl font-vivant text-black dark:text-white leading-relaxed">
                Vive fora de Portugal e gostava de ser acompanhado por um
                <span className="text-[hsl(var(--gold-leaf))] font-medium"> médico dentista Português</span>?
              </p>
            </div>

            {/* Descrição do programa */}
            <div className="space-y-6">
              <p className="text-lg text-jet/80 dark:text-gray-300 font-vivant-light leading-relaxed">
                A <strong className="text-[hsl(var(--gold-leaf))]">Clínica Areluna</strong> dispõe de um programa de transformação de
                <span className="text-[hsl(var(--gold-leaf))] font-medium"> três dias</span> com visita turística incluída à
                <span className="text-[hsl(var(--gold-leaf))] font-medium"> bela cidade do Porto</span>.
              </p>

              {/* Call to action text */}
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-[hsl(var(--jet))] to-[hsl(var(--ring))] rounded-full"></div>
                <p className="text-xl font-vivant text-[hsl(var(--gold-leaf))] italic">
                  Entre em contacto e mude a sua vida.
                </p>
              </div>
            </div>

            {/* Benefícios premium */}
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "3 Dias", desc: "Programa intensivo" },
                { title: "Turismo", desc: "Visita ao Porto incluída" },
                { title: "Português", desc: "Médico dentista nacional" },
                { title: "Experiência", desc: "25 anos de expertise" }
              ].map((benefit, index) => (
                <div key={index} className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 border border-[hsl(var(--gold-leaf))]/15 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-vivant text-[hsl(var(--gold-leaf))] font-medium">{benefit.title}</h4>
                      <p className="text-xs text-jet/70 dark:text-gray-400 font-vivant-light">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Botão premium */}
            <div className="pt-4">
              <div
                className="relative inline-block group cursor-pointer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Botão principal */}
                <button className="relative bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black text-white font-vivant font-semibold px-10 py-5 rounded-2xl transition-all duration-500 group-hover:scale-105 border border-white/20">
                  <span className="relative z-10">AGENDAR CONSULTA ONLINE</span>

                  {/* Shimmer effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl transition-transform duration-1000 ${isHovered ? 'translate-x-full' : '-translate-x-full'
                    }`}></div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Espaço para imagem */}
          <div className="order-1 lg:order-2">
            <div className="relative bg-gradient-to-br from-white/80 via-white/60 to-white/80 rounded-3xl p-8 backdrop-blur-sm border border-[hsl(var(--gold-leaf))]/20 shadow-2xl">
              {/* Vídeo em formato stories */}
              <div className="aspect-[9/16] max-w-sm mx-auto bg-black rounded-3xl overflow-hidden shadow-2xl relative">
                <video
                  src="https://res.cloudinary.com/dli5oe4qg/video/upload/v1759420502/214-Legendado_1_1_wmmdvl.mp4"
                  className="w-full h-full object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                  title="Programa Turismo Dentário - 214-Legendado"
                  poster="https://res.cloudinary.com/dli5oe4qg/image/upload/v1759420895/Instituto_22092025_reelsnica_1_cxvac5.jpg"
                />
              </div>

              {/* Elementos decorativos do card */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-[hsl(var(--gold-leaf))] rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-amber-400 rounded-full opacity-60"></div>

              {/* Badge no card */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                <span className="text-[hsl(var(--gold-leaf))] font-vivant text-xs font-medium">25 ANOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourismDentarioSection;