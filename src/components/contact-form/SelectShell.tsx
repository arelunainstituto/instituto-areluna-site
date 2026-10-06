import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Envolve um <select> nativo (que fica igual: mesmo id, value e onChange):
 * tira a seta do browser e mostra o mesmo chevron em todos os selects.
 */
export const SelectShell = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("relative", className)}>
    {children}
    <ChevronDown
      className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-jet/50 dark:text-gray-400"
      aria-hidden="true"
    />
  </div>
);

export default SelectShell;
