import { createElement, lazy, useState, type ComponentType } from "react";

/**
 * Como React.lazy, mas com `preload()`: se o módulo já tiver sido carregado
 * antes do primeiro render, o componente é desenhado de forma síncrona, sem
 * passar pelo fallback do Suspense.
 *
 * Porquê: as páginas são pré-renderizadas (HTML estático). Com React.lazy puro,
 * o createRoot apaga esse HTML e mostra o fallback (ecrã vazio) até a chunk da
 * rota chegar — pior Speed Index e um segundo LCP. Pré-carregando a rota atual
 * antes de montar (ver src/main.tsx), a troca do HTML estático pelo React é
 * imediata e visualmente idêntica.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any -- igual à assinatura de React.lazy
export function lazyWithPreload<T extends ComponentType<any>>(factory: () => Promise<{ default: T }>) {
  let loaded: T | undefined;
  let promise: Promise<{ default: T }> | undefined;

  const preload = () =>
    (promise ??= factory().then((module) => {
      loaded = module.default;
      return module;
    }));

  const LazyComponent = lazy(preload);

  // O tipo é fixado na montagem: trocar de LazyComponent para o módulo num
  // re-render posterior remontaria a página (e perderia o estado, ex.: formulários).
  const Component = (props: React.ComponentProps<T>) => {
    const [Resolved] = useState(() => (loaded ?? LazyComponent) as ComponentType<React.ComponentProps<T>>);
    return createElement(Resolved, props);
  };

  return Object.assign(Component, { preload });
}
