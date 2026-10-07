import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Entrada suave (fade + subida) quando o elemento entra no ecrã.
 * Só CSS + IntersectionObserver: sem bibliotecas de animação (framer-motion
 * e afins pesam no bundle). Respeita `prefers-reduced-motion`.
 * NÃO usar no hero (atrasaria o LCP).
 */
export interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Atraso em ms, para escalonar itens de uma grelha (ex.: index * 80). */
  delay?: number;
}

export const Reveal = ({ delay = 0, className, style, children, ...props }: RevealProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-elegant motion-reduce:transition-none",
        visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        className,
      )}
      style={{ transitionDelay: visible && delay ? `${delay}ms` : undefined, ...style }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Reveal;
