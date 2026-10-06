import { QueryClient } from "@tanstack/react-query";

// Só o blog usa react-query: o provider vive nas páginas do blog (chunks lazy),
// para a biblioteca não entrar no JavaScript inicial das outras páginas.
export const queryClient = new QueryClient();
