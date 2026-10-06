import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Cabeçalho padrão de secção: etiqueta (eyebrow) + título + descrição.
 * Escala tipográfica única para todos os h2 do site (a fonte não muda,
 * só o tamanho fica consistente).
 *
 * Use `highlight` para a parte do título em dourado (gold-leaf).
 * `tone="dark"` quando a secção tem fundo escuro.
 */
export interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  highlight?: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  /** Nível do título; h2 por omissão (h1 só nos heros). */
  as?: "h1" | "h2" | "h3";
  className?: string;
}

export const Eyebrow = ({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-vivant tracking-[0.18em] uppercase",
      tone === "dark"
        ? "border-gold-leaf/40 bg-white/5 text-gold-leaf"
        : "border-gold-leaf/40 bg-white/70 text-jet/80 dark:bg-white/5 dark:text-gold-leaf",
      className,
    )}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-gold-leaf" aria-hidden="true" />
    {children}
  </span>
);

export const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  tone = "light",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) => (
  <div
    className={cn(
      "mb-12 flex flex-col gap-5 lg:mb-16",
      align === "center" ? "mx-auto max-w-3xl items-center text-center" : "max-w-2xl items-start text-left",
      className,
    )}
  >
    {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
    <Tag
      className={cn(
        "font-vivant text-3xl leading-[1.1] tracking-tight text-balance break-words sm:text-4xl lg:text-5xl",
        tone === "dark" ? "text-white" : "text-jet dark:text-white",
      )}
    >
      {title}
      {highlight && (
        <>
          {" "}
          <span className="text-gold-leaf">{highlight}</span>
        </>
      )}
    </Tag>
    {description && (
      <p
        className={cn(
          "font-vivant-light text-base leading-relaxed sm:text-lg",
          tone === "dark" ? "text-white/75" : "text-jet/70 dark:text-gray-300",
        )}
      >
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
