import * as React from "react";
import { Eyebrow } from "./SectionHeading";

/**
 * Hero padrão das páginas internas: mesma altura, mesmo overlay, mesmo h1.
 * A imagem carrega com prioridade alta (LCP) e o texto nunca fica escondido
 * por animações. Inspirado nos "hero" centrados do catálogo 21st.dev.
 */
export interface PageHeroProps {
  image: string;
  imageAlt?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  highlight?: React.ReactNode;
  description?: React.ReactNode;
  /** Botões (size="cta"). */
  actions?: React.ReactNode;
  /** Bloco extra por baixo dos botões (estatísticas, contactos rápidos). */
  children?: React.ReactNode;
}

export const PageHero = ({
  image,
  imageAlt = "",
  eyebrow,
  title,
  highlight,
  description,
  actions,
  children,
}: PageHeroProps) => (
  <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-dark pb-16 pt-44 text-pure-white sm:pt-56 md:pt-64">
    <div className="absolute inset-0" aria-hidden="true">
      <img
        src={image}
        alt={imageAlt}
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-jet/80 via-jet/70 to-black/90" />
    </div>

    <div className="relative z-10 mx-auto w-full max-w-5xl px-4 text-center sm:px-6 lg:px-8">
      {eyebrow && <Eyebrow tone="dark" className="mb-6">{eyebrow}</Eyebrow>}
      <h1 className="font-vivant text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="text-gold-leaf">{highlight}</span>
          </>
        )}
      </h1>
      {description && (
        <p className="mx-auto mt-6 max-w-3xl font-vivant-light text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
          {description}
        </p>
      )}
      {actions && <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">{actions}</div>}
      {children && <div className="mt-14">{children}</div>}
    </div>
  </section>
);

/** Grelha de números/contactos para o hero. */
export const HeroStat = ({ value, label }: { value: React.ReactNode; label: React.ReactNode }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
    <div className="font-vivant text-3xl text-gold-leaf sm:text-4xl">{value}</div>
    <div className="mt-1 font-vivant-light text-sm leading-tight text-white/80">{label}</div>
  </div>
);

export default PageHero;
