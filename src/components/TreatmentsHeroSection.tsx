import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const TreatmentsHeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[hsl(var(--jet))] via-[#1a1a1a] to-black pt-44 sm:pt-56 md:pt-64 pb-20">
      {/* Imagem de fundo com baixa opacidade */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954598/instituto-areluna/97a1febf-3c27-4a63-a583-b2522013f3f4.jpg"
          alt="Background"
          className="w-full h-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--jet))]/90 via-[#1a1a1a]/80 to-black/90"></div>
      </div>

      <div
        className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto"
        style={{ color: '#FFFFFF' }}
      >
        {/* Badge superior */}
        <div className="inline-flex items-center bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm rounded-full px-4 xs:px-6 py-2 xs:py-3 border border-[hsl(var(--gold-leaf))]/30 shadow-lg mb-6 xs:mb-8">
          <div className="w-2 h-2 bg-[hsl(var(--gold-leaf))] rounded-full mr-3"></div>
          <span className="text-[hsl(var(--gold-leaf))] font-vivant text-xs xs:text-sm font-medium tracking-wide">
            {t('treatments_page.hero.badge')}
          </span>
        </div>

        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-vivant-skinny font-thin mb-6 xs:mb-8 leading-tight tracking-wider" style={{
          fontWeight: 200
        }}>
          {t('treatments_page.hero.title_start')}<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          <span className="text-[hsl(var(--gold-leaf))] drop-shadow-lg">
            {t('treatments_page.hero.title_highlight')}
          </span>
        </h1>

        <p className="text-base xs:text-lg sm:text-xl lg:text-2xl mb-8 xs:mb-10 sm:mb-12 font-vivant opacity-90 max-w-3xl mx-auto leading-relaxed">
          {t('treatments_page.hero.description')}
        </p>

        <div className="flex flex-col xs:flex-row gap-4 xs:gap-6 justify-center mb-8 xs:mb-12">
          <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
            <Button variant="gold" size="lg" className="px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base tracking-wider font-vivant-light min-h-[48px]">
              {t('treatments_page.hero.cta_schedule')}
            </Button>
          </a>
          <Button
            variant="outline-gold"
            size="lg"
            className="px-6 xs:px-8 py-3 xs:py-4 text-sm xs:text-base tracking-wider font-vivant-light min-h-[48px]"
            onClick={() => document.getElementById('tratamentos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('treatments_page.hero.cta_view_all')}
          </Button>
        </div>

        {/* Estatísticas rápidas */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-3 xs:gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {[
            { number: t('treatments_page.hero.stats.experience.value'), label: t('treatments_page.hero.stats.experience.label') },
            { number: t('treatments_page.hero.stats.smiles.value'), label: t('treatments_page.hero.stats.smiles.label') },
            { number: t('treatments_page.hero.stats.satisfaction.value'), label: t('treatments_page.hero.stats.satisfaction.label') },
            { number: t('treatments_page.hero.stats.treatments.value'), label: t('treatments_page.hero.stats.treatments.label') }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-[#231F20]/95 backdrop-blur-md rounded-2xl p-6 border border-white/5 hover:border-[hsl(var(--gold-leaf))]/30 transition-all duration-300 text-center group"
            >
              <div className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-vivant font-bold text-[hsl(var(--gold-leaf))] mb-2">
                {stat.number}
              </div>
              <div className="text-xs xs:text-sm sm:text-base font-vivant-light opacity-90 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsHeroSection;