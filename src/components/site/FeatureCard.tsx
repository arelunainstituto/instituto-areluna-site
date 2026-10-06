import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Cartão padrão (serviços, benefícios, passos, membros da equipa…).
 * Borda fina, cantos 2xl, sombra elegante e realce dourado no hover —
 * padrão dos cartões do Origin UI / shadcn no catálogo 21st.dev.
 *
 * - `icon`: um ícone lucide-react (tamanho é tratado aqui).
 * - `href`: torna o cartão inteiro clicável (um único <a>, sem <button> dentro).
 * - `tone="dark"` para cartões sobre fundo escuro.
 */
export interface FeatureCardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  icon?: React.ReactNode;
  title: React.ReactNode;
  description?: React.ReactNode;
  href?: string;
  tone?: "light" | "dark";
  footer?: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components -- classes partilhadas com cartões feitos à mão
export const cardBaseClasses = (tone: "light" | "dark" = "light") =>
  cn(
    "group relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 ease-elegant sm:p-8",
    tone === "dark"
      ? "border-white/10 bg-white/5 text-pure-white hover:border-gold-leaf/40 hover:bg-white/[0.07]"
      : "border-jet/10 bg-white text-jet shadow-[0_1px_2px_hsl(20_11%_25%/0.04)] hover:-translate-y-1 hover:border-gold-leaf/50 hover:shadow-elegant dark:border-white/10 dark:bg-gray-900 dark:text-gray-100",
  );

export const FeatureCard = ({
  icon,
  title,
  description,
  href,
  tone = "light",
  footer,
  className,
  children,
  ...props
}: FeatureCardProps) => {
  const content = (
    <>
      {icon && (
        <div
          className={cn(
            "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border [&_svg]:h-5 [&_svg]:w-5",
            tone === "dark"
              ? "border-gold-leaf/30 bg-gold-leaf/10 text-gold-leaf"
              : "border-gold-leaf/30 bg-gold-leaf/10 text-jet dark:text-gold-leaf",
          )}
          aria-hidden="true"
        >
          {icon}
        </div>
      )}
      <h3 className="font-vivant text-lg leading-snug sm:text-xl">{title}</h3>
      {description && (
        <p
          className={cn(
            "mt-3 font-vivant-light text-sm leading-relaxed sm:text-base",
            tone === "dark" ? "text-white/70" : "text-jet/70 dark:text-gray-400",
          )}
        >
          {description}
        </p>
      )}
      {children}
      {footer && <div className="mt-auto pt-6">{footer}</div>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={cn(
          cardBaseClasses(tone),
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf focus-visible:ring-offset-2",
          className,
        )}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  return (
    <article className={cn(cardBaseClasses(tone), className)} {...props}>
      {content}
    </article>
  );
};

export default FeatureCard;
