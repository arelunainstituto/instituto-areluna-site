import { useEffect } from "react";
import { CONSENT_EVENT, getConsent, type ConsentChoice } from "@/lib/consent";

/**
 * Injeta GTM + Facebook Pixel **apenas** enquanto a rota
 * de LP estiver montada. Removendo a montagem, os scripts são desanexados
 * e param de disparar eventos noutras rotas do site institucional.
 *
 * Os IDs vêm das LPs originais (vivobem). Se mudarem, alterar aqui.
 */
const GTM_ID = "GTM-K94Q8Q2G";
const FB_PIXEL_ID = "4096645043937889";

declare global {
  interface Window {
    dataLayer?: unknown[];
    fbq?: ((...args: unknown[]) => void) & { callMethod?: unknown; queue?: unknown[]; loaded?: boolean; version?: string; push?: unknown };
    _fbq?: Window["fbq"];
  }
}

const SCRIPT_MARK = "data-lp-tracking";

function injectInline(text: string): HTMLScriptElement {
  const s = document.createElement("script");
  s.text = text;
  s.setAttribute(SCRIPT_MARK, "1");
  document.head.appendChild(s);
  return s;
}

const LPTracking = () => {
  useEffect(() => {
    // Idempotência: se já estiver injetado, não duplicar
    if (document.querySelector(`script[${SCRIPT_MARK}]`)) return;

    // GTM
    injectInline(
      `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;j.setAttribute('${SCRIPT_MARK}','1');f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
    );

    // Facebook Pixel
    injectInline(`
      !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;t.setAttribute('${SCRIPT_MARK}','1');s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
      fbq('consent', ${getConsent() === "accepted" ? "'grant'" : "'revoke'"});
      fbq('init','${FB_PIXEL_ID}');
      fbq('track','PageView');
    `);

    // Consentimento: o pixel só envia dados depois de «Aceitar» no banner do site
    // (CookieBanner); os eventos ficam retidos até lá. O antigo cookieconsent das
    // LPs foi removido (o config usava `import` num script clássico e nunca corria).
    const onConsent = (event: Event) => {
      const choice = (event as CustomEvent<ConsentChoice>).detail;
      window.fbq?.("consent", choice === "accepted" ? "grant" : "revoke");
    };
    window.addEventListener(CONSENT_EVENT, onConsent);

    return () => {
      window.removeEventListener(CONSENT_EVENT, onConsent);
      // Limpa scripts injetados ao sair da rota LP
      document.querySelectorAll(`script[${SCRIPT_MARK}]`).forEach((el) => el.remove());
      // Não removemos window.dataLayer/fbq porque ao recarregar a LP reinicializam.
    };
  }, []);

  return null;
};

export default LPTracking;
