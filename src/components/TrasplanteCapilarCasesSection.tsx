import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Reveal, cardBaseClasses } from "@/components/site";
import { cn } from "@/lib/utils";
import caso1_480 from "@/assets/transplante-caso-1-480.webp";
import caso1_960 from "@/assets/transplante-caso-1-960.webp";
import caso2_480 from "@/assets/transplante-caso-2-480.webp";
import caso2_960 from "@/assets/transplante-caso-2-960.webp";
import caso3_480 from "@/assets/transplante-caso-3-480.webp";
import caso3_960 from "@/assets/transplante-caso-3-960.webp";
import caso4Front_480 from "@/assets/transplante-caso-4-frontview-480.webp";
import caso4Front_960 from "@/assets/transplante-caso-4-frontview-960.webp";
import caso4Back_480 from "@/assets/transplante-caso-4-backview-480.webp";
import caso4Back_960 from "@/assets/transplante-caso-4-backview-960.webp";
import caso4Top_480 from "@/assets/transplante-caso-4-topview-480.webp";
import caso4Top_960 from "@/assets/transplante-caso-4-topview-960.webp";
import caso4Top2_480 from "@/assets/transplante-caso-4-topview-2-480.webp";
import caso4Top2_960 from "@/assets/transplante-caso-4-topview-2-960.webp";
import caso5_480 from "@/assets/transplante-caso-5-480.webp";
import caso5_960 from "@/assets/transplante-caso-5-960.webp";
import caso6Frontal_480 from "@/assets/transplante-caso-6-frontal-480.webp";
import caso6Frontal_960 from "@/assets/transplante-caso-6-frontal-960.webp";
import caso6Lateral_480 from "@/assets/transplante-caso-6-lateral-480.webp";
import caso6Lateral_960 from "@/assets/transplante-caso-6-lateral-960.webp";
import caso6Superior_480 from "@/assets/transplante-caso-6-superior-480.webp";
import caso6Superior_960 from "@/assets/transplante-caso-6-superior-960.webp";
import sobrancelha1_480 from "@/assets/transplante-sobrancelha-caso-1-480.webp";
import sobrancelha1_960 from "@/assets/transplante-sobrancelha-caso-1-960.webp";
import sobrancelha2_480 from "@/assets/transplante-sobrancelha-caso-2-480.webp";
import sobrancelha2_960 from "@/assets/transplante-sobrancelha-caso-2-960.webp";
import barbaPerfil_480 from "@/assets/transplante-barba-caso-1-perfil-480.webp";
import barbaPerfil_960 from "@/assets/transplante-barba-caso-1-perfil-960.webp";
import barbaTresQuartos_480 from "@/assets/transplante-barba-caso-1-tres-quartos-480.webp";
import barbaTresQuartos_960 from "@/assets/transplante-barba-caso-1-tres-quartos-960.webp";

type CaseCategory = "scalp" | "eyebrows" | "beard";
const FILTERS = ["all", "scalp", "eyebrows", "beard"] as const;
type Filter = (typeof FILTERS)[number];

interface CaseView {
  src480: string;
  src960: string;
  /** Chave de tradução do nome da vista (só nos casos com várias vistas). */
  labelKey?: string;
  /** Composição quadrada: fica centrada no cartão 4:5, com fundo desfocado da própria imagem. */
  square?: boolean;
}

interface ClinicalCase {
  id: number;
  category: CaseCategory;
  views: CaseView[];
}

// As imagens são composições antes/depois (4:5 ou quadradas): o cartão mostra-as
// inteiras, com os rótulos ANTES/DEPOIS e a legenda de cada vista.
const CASES: ClinicalCase[] = [
  { id: 1, category: "scalp", views: [{ src480: caso1_480, src960: caso1_960 }] },
  { id: 2, category: "scalp", views: [{ src480: caso2_480, src960: caso2_960, square: true }] },
  { id: 3, category: "scalp", views: [{ src480: caso3_480, src960: caso3_960 }] },
  {
    id: 4,
    category: "scalp",
    views: [
      { src480: caso4Front_480, src960: caso4Front_960, labelKey: "cases.views.front" },
      { src480: caso4Back_480, src960: caso4Back_960, labelKey: "cases.views.back" },
      { src480: caso4Top_480, src960: caso4Top_960, labelKey: "cases.views.top" },
      { src480: caso4Top2_480, src960: caso4Top2_960, labelKey: "cases.views.top_evolution" },
    ],
  },
  { id: 5, category: "scalp", views: [{ src480: caso5_480, src960: caso5_960, square: true }] },
  {
    id: 6,
    category: "scalp",
    views: [
      { src480: caso6Frontal_480, src960: caso6Frontal_960, labelKey: "cases.views.front" },
      { src480: caso6Lateral_480, src960: caso6Lateral_960, labelKey: "cases.views.side" },
      { src480: caso6Superior_480, src960: caso6Superior_960, labelKey: "cases.views.top" },
    ],
  },
  { id: 7, category: "eyebrows", views: [{ src480: sobrancelha1_480, src960: sobrancelha1_960 }] },
  { id: 8, category: "eyebrows", views: [{ src480: sobrancelha2_480, src960: sobrancelha2_960 }] },
  {
    id: 9,
    category: "beard",
    views: [
      { src480: barbaPerfil_480, src960: barbaPerfil_960, labelKey: "cases.views.profile", square: true },
      { src480: barbaTresQuartos_480, src960: barbaTresQuartos_960, labelKey: "cases.views.three_quarter", square: true },
    ],
  },
];

const IMAGE_SIZES = "(min-width:1024px) 400px, (min-width:640px) 50vw, 100vw";

// Casos (inspirado nos blocos "gallery" / "testimonials" do 21st.dev): grelha de cartões com imagem de aspeto fixo.
const TrasplanteCapilarCasesSection = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [activeView, setActiveView] = useState<Record<number, number>>({});
  const [filter, setFilter] = useState<Filter>("all");
  const visibleCases = filter === "all" ? CASES : CASES.filter((c) => c.category === filter);
  const { t } = useTranslation("hair_transplant_page");

  return (
    <Section tone="light" width="wide">
      <SectionHeading
        eyebrow={t("cases.badge")}
        title={t("cases.title_start")}
        highlight={t("cases.title_highlight")}
        description={t("cases.description")}
      />

      <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label={t("cases.filters.label")}>
        {FILTERS.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setFilter(id)}
            aria-pressed={filter === id}
            className={cn(
              "min-h-11 rounded-full border px-5 text-sm font-vivant-light tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf focus-visible:ring-offset-2",
              filter === id
                ? "border-jet bg-jet text-white dark:border-gold-leaf dark:bg-gold-leaf dark:text-jet-fixed"
                : "border-jet/20 bg-white text-jet hover:border-gold-leaf/60 dark:border-white/15 dark:bg-gray-900 dark:text-gray-200",
            )}
          >
            {t(`cases.filters.${id}`)}
          </button>
        ))}
      </div>

      <div
        className={cn(
          "mx-auto grid grid-cols-1 gap-6 lg:gap-8",
          // Com o filtro, 1 ou 2 casos ficam centrados com a largura de cartão da grelha completa.
          visibleCases.length === 1 && "max-w-sm",
          visibleCases.length === 2 && "max-w-3xl sm:grid-cols-2",
          visibleCases.length >= 3 && "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {visibleCases.map((caseItem, index) => {
          const open = selectedCase === caseItem.id;
          const title = `Caso ${caseItem.id}`;
          const description = t(`cases.items.case${caseItem.id}.description`);
          const viewIndex = activeView[caseItem.id] ?? 0;
          const view = caseItem.views[viewIndex];
          const viewLabel = view.labelKey ? t(view.labelKey) : undefined;

          return (
            <Reveal key={`${filter}-${caseItem.id}`} delay={index * 80}>
              <article className={cardBaseClasses("light") + " !p-0 overflow-hidden"}>
                <div className="relative aspect-[4/5] overflow-hidden bg-black">
                  {view.square && (
                    <img
                      key={`fundo-${view.src960}`}
                      src={view.src960}
                      srcSet={`${view.src480} 480w, ${view.src960} 960w`}
                      sizes={IMAGE_SIZES}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-2xl"
                    />
                  )}
                  <img
                    key={view.src960}
                    src={view.src960}
                    srcSet={`${view.src480} 480w, ${view.src960} 960w`}
                    sizes={IMAGE_SIZES}
                    alt={`${title} — ${description}${viewLabel ? ` (${viewLabel})` : ""} — antes e depois`}
                    loading="lazy"
                    decoding="async"
                    width={960}
                    height={1200}
                    className="relative h-full w-full object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-gold-leaf px-3 py-1.5 font-vivant text-xs font-medium text-jet-fixed">
                    {title}
                  </span>
                </div>

                {caseItem.views.length > 1 && (
                  <div role="group" aria-label={t("cases.views.label")} className="grid grid-cols-4 gap-2 px-4 pt-4">
                    {caseItem.views.map((v, i) => {
                      const active = i === viewIndex;
                      const label = v.labelKey ? t(v.labelKey) : `${i + 1}`;
                      return (
                        <button
                          key={v.src480}
                          type="button"
                          onClick={() => setActiveView((prev) => ({ ...prev, [caseItem.id]: i }))}
                          aria-pressed={active}
                          aria-label={label}
                          title={label}
                          className={cn(
                            "relative aspect-[4/5] min-h-[44px] overflow-hidden rounded-lg border-2 bg-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf focus-visible:ring-offset-2",
                            active ? "border-gold-leaf" : "border-transparent opacity-70 hover:opacity-100",
                          )}
                        >
                          <img
                            src={v.src480}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            width={480}
                            height={600}
                            className="h-full w-full object-cover"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-vivant text-lg text-jet transition-colors duration-300 group-hover:text-gold-leaf dark:text-white sm:text-xl">
                    {description}
                  </h3>
                  {viewLabel && (
                    <p className="mt-1 font-vivant-light text-sm text-jet/60 dark:text-gray-400">{viewLabel}</p>
                  )}

                  <div className={`grid transition-all duration-300 ${open ? "mt-4 grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p id={`caso-${caseItem.id}`} className="border-t border-gold-leaf/20 pt-3 font-vivant-light text-sm leading-relaxed text-jet/70 dark:text-gray-400">
                        {t(`cases.items.case${caseItem.id}.details`)}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedCase(open ? null : caseItem.id)}
                    aria-expanded={open}
                    aria-controls={`caso-${caseItem.id}`}
                    className="mt-auto flex min-h-[44px] items-center justify-between pt-4 font-vivant-light text-xs text-gold-leaf focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf"
                  >
                    <span>Caso clínico</span>
                    <svg className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mx-auto mt-12 max-w-2xl text-center lg:mt-16">
        <div className="rounded-2xl border border-gold-leaf/30 bg-white p-6 shadow-elegant dark:bg-gray-900 sm:p-8">
          <h3 className="mb-3 font-vivant text-xl text-jet dark:text-white sm:text-2xl">{t("cases.cta.title")}</h3>
          <p className="mb-6 font-vivant-light text-sm text-jet/70 dark:text-gray-400 sm:text-base">{t("cases.cta.description")}</p>
          <Button asChild variant="gold" size="cta">
            <a href="https://wa.me/351910098226" target="_blank" rel="noopener noreferrer">
              {t("cases.cta.button")}
            </a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
};

export default TrasplanteCapilarCasesSection;
