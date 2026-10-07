import { lazy, Suspense, useEffect, useState } from "react";

const Toaster = lazy(() => import("@/components/ui/toaster").then((m) => ({ default: m.Toaster })));

/**
 * Os toasts só aparecem depois de enviar um formulário. Montamos o Toaster
 * quando o browser fica livre, fora do caminho crítico do primeiro render.
 * O estado dos toasts (use-toast) é global, por isso nada se perde.
 */
const DeferredToaster = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const show = () => setReady(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(show, { timeout: 3000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(show, 1500);
    return () => clearTimeout(id);
  }, []);

  return ready ? (
    <Suspense fallback={null}>
      <Toaster />
    </Suspense>
  ) : null;
};

export default DeferredToaster;
