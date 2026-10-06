import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

/** Frase-padrão exibida junto aos botões de marcação nas páginas de tratamento. */
const ClinicalDisclaimer = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  return (
    <p className={cn("text-xs sm:text-sm font-vivant-light leading-relaxed max-w-xl mx-auto", className)}>
      {t(
        "common.clinical_disclaimer",
        "A indicação de qualquer tratamento depende de uma consulta de avaliação e de diagnóstico individual. Os resultados variam de pessoa para pessoa."
      )}
    </p>
  );
};

export default ClinicalDisclaimer;
