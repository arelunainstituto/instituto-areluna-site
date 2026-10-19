/**
 * Consentimento de cookies (RGPD) ligado ao Google Consent Mode v2.
 *
 * - Por omissão tudo está negado: o bloco no <head> do index.html define
 *   `consent default` antes do GTM e repõe uma escolha já guardada.
 * - O banner (CookieBanner) chama setConsent() ao aceitar/rejeitar.
 * - O rodapé reabre o banner com openCookiePreferences() (retirar o
 *   consentimento tem de ser tão fácil como dá-lo).
 * - O pixel da Meta nas LPs ouve CONSENT_EVENT (LPTracking).
 */

export type ConsentChoice = "accepted" | "rejected";

export const CONSENT_STORAGE_KEY = "cookie-consent";
/** CustomEvent<ConsentChoice> disparado na window quando a escolha muda. */
export const CONSENT_EVENT = "areluna:consent";
/** Event disparado na window para reabrir o banner de cookies. */
export const OPEN_PREFERENCES_EVENT = "areluna:cookie-preferences";

export function getConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === "accepted" || value === "rejected" ? value : null;
  } catch {
    return null;
  }
}

/** Os comandos de consentimento do Google têm de entrar no dataLayer como `arguments`. */
function gtagCommand(..._args: unknown[]): void {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

export function setConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // sem localStorage: a escolha vale só para esta página
  }
  const value = choice === "accepted" ? "granted" : "denied";
  gtagCommand("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
  });
  // Evento para acionadores do GTM (ex.: tags que não são da Google).
  window.dataLayer!.push({ event: "cookie_consent_update", consent_choice: choice });
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_EVENT, { detail: choice }));
}

export function openCookiePreferences(): void {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT));
}
