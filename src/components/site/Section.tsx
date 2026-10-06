import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Base de todas as secções do site institucional.
 * Garante o mesmo ritmo vertical, a mesma largura de conteúdo e os mesmos
 * fundos em todas as páginas. Só usa os tokens da paleta AreLuna.
 *
 * tone:
 *  - "light": fundo branco (padrão)
 *  - "muted": fundo creme muito suave, para alternar com "light"
 *  - "dark":  fundo jet → ring (castanho escuro), texto claro
 *
 * Inspirado nos blocos de secção do shadcn/ui e Origin UI (catálogo 21st.dev).
 */
const toneClasses = {
  light: "bg-background text-jet dark:bg-gray-950 dark:text-gray-100",
  muted: "bg-gradient-light text-jet dark:bg-gray-900 dark:bg-none dark:text-gray-100",
  dark: "bg-gradient-dark text-white dark:bg-black dark:bg-none",
} as const;

const spacingClasses = {
  default: "py-20 sm:py-24 lg:py-28",
  compact: "py-14 sm:py-16 lg:py-20",
  none: "",
} as const;

export type SectionTone = keyof typeof toneClasses;

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: SectionTone;
  spacing?: keyof typeof spacingClasses;
  /** Largura do contentor interno. "none" para gerir o layout à mão. */
  width?: "default" | "narrow" | "wide" | "none";
}

const widthClasses = {
  default: "max-w-6xl",
  narrow: "max-w-3xl",
  wide: "max-w-7xl",
} as const;

export const Container = ({
  className,
  width = "default",
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { width?: keyof typeof widthClasses }) => (
  <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", widthClasses[width], className)} {...props} />
);

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ tone = "light", spacing = "default", width = "default", className, children, ...props }, ref) => (
    <section
      ref={ref}
      className={cn("relative overflow-hidden", toneClasses[tone], spacingClasses[spacing], className)}
      {...props}
    >
      {width === "none" ? children : <Container width={width}>{children}</Container>}
    </section>
  ),
);
Section.displayName = "Section";

export default Section;
