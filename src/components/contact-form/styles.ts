import { cn } from "@/lib/utils";

/**
 * Classes VISUAIS partilhadas do formulário de triagem (ContactFormSection).
 * Sem estado nem lógica: garantem a mesma altura, borda e foco dourado em
 * todos os campos. Inspiração: blocos "form" / "contact" do catálogo 21st.dev
 * (Origin UI / shadcn), adaptados aos tokens AreLuna.
 */
export const fieldClasses = cn(
  "h-12 w-full rounded-xl border border-jet/15 bg-white px-4 text-sm text-jet shadow-[0_1px_2px_hsl(20_11%_25%/0.04)]",
  "placeholder:text-jet/40 transition-[border-color,box-shadow] duration-200",
  "hover:border-jet/30 focus:border-gold-leaf focus:outline-none focus:ring-2 focus:ring-gold-leaf/30",
  "dark:border-white/15 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-500 dark:hover:border-white/30",
);

export const selectClasses = cn(fieldClasses, "cursor-pointer appearance-none pr-10");

export const textareaClasses = cn(fieldClasses, "h-auto min-h-[96px] resize-none py-3 leading-relaxed");

export const labelClasses = (active = false) =>
  cn(
    "mb-2 block font-vivant text-xs uppercase leading-snug tracking-[0.12em] transition-colors",
    active ? "text-gold-leaf" : "text-jet/75 dark:text-gray-300",
  );

export const highlightLabelClasses =
  "mb-3 block font-vivant text-xs uppercase leading-snug tracking-[0.12em] text-jet dark:text-gold-leaf";

export const checkboxClasses =
  "mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-jet/30 accent-[hsl(var(--gold-leaf))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf focus-visible:ring-offset-2";

/** Bloco de destaque (passo 1 e pergunta principal). */
export const highlightBlockClasses =
  "rounded-2xl border border-gold-leaf/30 bg-gold-leaf/5 p-4 sm:p-5 dark:border-gold-leaf/25 dark:bg-gold-leaf/10";

/** Cartão informativo da coluna lateral (estático: sem elevação no hover). */
export const asideCardClasses =
  "rounded-2xl border border-jet/10 bg-white p-6 shadow-[0_1px_2px_hsl(20_11%_25%/0.04)] sm:p-8 dark:border-white/10 dark:bg-gray-900";

/** Botão WhatsApp (verde da marca WhatsApp, mesma forma que os CTAs `size="cta"`). */
export const whatsappButtonClasses =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 font-vivant text-sm tracking-wide text-white transition-colors duration-300 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 sm:h-14 [&_svg]:h-4 [&_svg]:w-4";
