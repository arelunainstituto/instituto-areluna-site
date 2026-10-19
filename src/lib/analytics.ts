import i18n from "@/i18n";
import { CONTACTS } from "@/contexts/ContactContext";

/**
 * Camada de eventos do site para o Google Tag Manager (GTM-K94Q8Q2G).
 * Tudo é enviado para o dataLayer; o GTM decide para onde vai (GA4, Google Ads).
 * Dicionário de eventos e configuração do GTM/GA4: docs/tracking.md.
 *
 * Regras: nunca enviar dados pessoais (nome, email, telefone, mensagem) nestes
 * eventos; nomes de secção estáveis em data-track-section (não dependem da língua).
 */

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    __PRERENDER_INJECTED?: unknown;
  }
}

export function track(event: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  (window.dataLayer = window.dataLayer || []).push({
    event,
    page_path: window.location.pathname,
    page_language: i18n.language?.slice(0, 2) || "pt",
    ...params,
  });
}

/** Secção do site onde está o elemento (data-track-section, ou o cabeçalho/rodapé). */
export function sectionOf(el: Element): string {
  const tagged = el.closest("[data-track-section]");
  if (tagged) return tagged.getAttribute("data-track-section") || "outro";
  if (el.closest("header")) return "menu";
  if (el.closest("footer")) return "rodape";
  const section = el.closest("section");
  if (!section) return "outro";
  if (section.id) return section.id;
  const index = Array.from(document.querySelectorAll("section")).indexOf(section);
  return `secao-${index + 1}`;
}

function labelOf(el: HTMLElement): string {
  const explicit = el.getAttribute("data-track-label");
  const text = (el.innerText || el.textContent || "").replace(/\s+/g, " ").trim();
  return (explicit || text || el.getAttribute("aria-label") || "").slice(0, 100);
}

/** contact_1 / contact_2 do round robin (ContactContext), pelo número do link. */
function contactIdOf(href: string): string {
  const digits = href.replace(/\D/g, "");
  const match = CONTACTS.find((c) => digits.includes(c.cleanWhatsapp));
  return match?.id ?? "outro";
}

function onDocumentClick(event: MouseEvent): void {
  const target = event.target as Element | null;
  const link = target?.closest?.("a[href]") as HTMLAnchorElement | null;
  if (!link) return;

  const href = link.getAttribute("href") || "";
  const common: EventParams = {
    cta_section: sectionOf(link),
    cta_label: labelOf(link),
    cta_item: link.getAttribute("data-track-item") || undefined,
  };

  if (/wa\.me\/|api\.whatsapp\.com|web\.whatsapp\.com/.test(href)) {
    track("whatsapp_click", { ...common, contact_id: contactIdOf(href), link_url: href.split("?")[0] });
  } else if (href.startsWith("tel:")) {
    track("phone_click", { ...common, contact_id: contactIdOf(href) });
  } else if (href.startsWith("mailto:")) {
    track("email_click", common);
  } else if (href.includes("#contacto-form")) {
    track("cta_click", { ...common, cta_target: "formulario" });
  }
}

/**
 * section_view: uma vez por secção e por página vista, quando a secção ocupa
 * pelo menos metade do ecrã (ou metade de si própria, se for pequena).
 * Permite comparar "quantos viram a secção" com "quantos clicaram nela".
 */
function initSectionViews(): void {
  if (typeof IntersectionObserver === "undefined") return;
  let seen = new Set<string>();
  let lastPath = window.location.pathname;
  const observed = new WeakSet<Element>();

  const observer = new IntersectionObserver(
    (entries) => {
      if (window.location.pathname !== lastPath) {
        lastPath = window.location.pathname;
        seen = new Set();
      }
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const enoughOfScreen = entry.intersectionRect.height >= window.innerHeight * 0.5;
        if (entry.intersectionRatio < 0.5 && !enoughOfScreen) continue;
        const section = entry.target.getAttribute("data-track-section") || "outro";
        if (seen.has(section)) continue;
        seen.add(section);
        track("section_view", { section });
      }
    },
    { threshold: [0, 0.25, 0.5, 0.75] },
  );

  const scan = () => {
    document.querySelectorAll("[data-track-section]").forEach((el) => {
      if (observed.has(el)) return;
      observed.add(el);
      // Elementos fixos (botão flutuante) servem para atribuir cliques, não são secções vistas.
      if (getComputedStyle(el).position === "fixed") return;
      observer.observe(el);
    });
  };
  scan();
  // Secções lazy e mudanças de página entram depois do arranque.
  let pending = false;
  new MutationObserver(() => {
    if (pending) return;
    pending = true;
    setTimeout(() => {
      pending = false;
      scan();
    }, 300);
  }).observe(document.getElementById("root") ?? document.body, { childList: true, subtree: true });
}

let initialised = false;

/** Chamado uma vez, depois de montar o React (src/main.tsx). */
export function initAnalytics(): void {
  if (initialised || typeof window === "undefined" || window.__PRERENDER_INJECTED) return;
  initialised = true;
  // Fase de captura: regista o clique mesmo que o componente pare a propagação.
  document.addEventListener("click", onDocumentClick, { capture: true });
  initSectionViews();
}
