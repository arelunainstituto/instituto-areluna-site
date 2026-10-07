import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import heroImage from "@/assets/heroImage-1600.webp";
import heroImage828 from "@/assets/heroImage-828.webp";

/**
 * Hero (LCP): h1 e imagem visíveis na primeira pintura, sem animações de entrada.
 * Padrão inspirado no bloco "hero" do 21st.dev (texto centrado sobre imagem escura).
 */
const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-dark pt-36 pb-20 sm:pt-40">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          srcSet={`${heroImage828} 828w, ${heroImage} 1600w`}
          sizes="100vw"
          alt="Interior do Instituto AreLuna — clínica dentária e de estética avançada no Porto"
          className="h-full w-full object-cover mix-blend-overlay"
          {...{ fetchpriority: "high" }}
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-jet-fixed/90 via-jet-fixed/80 to-black/90" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h1 className="mb-8 font-vivant-skinny text-3xl font-thin leading-tight tracking-wide text-white sm:text-4xl md:text-5xl lg:text-6xl">
          {t('hero.title_start')} <span className="font-vivant text-gold-leaf">{t('hero.title_highlight')}</span> {t('hero.title_end')}
        </h1>

        <p className="mx-auto mb-12 max-w-2xl font-vivant-light text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6">
          <Button asChild variant="outline-gold" size="cta" className="w-full sm:w-auto sm:min-w-[260px]">
            <a href="/tratamentos">{t('hero.find_procedure')}</a>
          </Button>
          <Button asChild variant="gold-leaf" size="cta" className="w-full sm:w-auto sm:min-w-[260px]">
            <a href="#contacto-form">{t('hero.book')}</a>
          </Button>
        </div>

        <p className="mt-6 text-center font-vivant-light text-xs text-white/60">
          Unidades no Porto (Mota Galiza e Marquês) · Consulta de avaliação individual
        </p>
      </div>
    </section>
  );
};
export default HeroSection;
