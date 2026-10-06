import type { Post } from "@/services/marketingApi";
import { slugify } from "@/lib/utils";

/**
 * Toggle: enquanto `false`, o blog mostra **apenas** os posts estáticos
 * definidos abaixo — a API do ERP não é consultada.
 *
 * Mantido como kill-switch: se a API falhar e quisermos voltar a servir
 * conteúdo apenas via posts estáticos, basta repor `staticPosts` com os
 * dados desejados e mudar esta flag para `false`.
 */
export const ENABLE_ERP_POSTS = true;

/**
 * Posts servidos localmente pelo frontend.
 *
 * Histórico: o blog teve 4 posts estáticos aqui (Reabilitação Oral,
 * Estética Integrada, Implante dói?, Carga imediata) enquanto a API do
 * ERP era afinada — os HTMLs e os helpers `ctaBox`/`leiaTambem` viviam
 * neste ficheiro. Quando o conteúdo passou para a API (com os mesmos
 * slugs), os estáticos foram removidos e tudo passou a vir do ERP.
 *
 * Para adicionar de volta, ver o git log deste ficheiro (commit
 * `5ec17f8` tem a última versão completa) e o contrato em
 * `areluna/blog-api-contract.md`.
 */
export const staticPosts: Post[] = [];

/** Slugs de URL próprios destes posts. */
export const staticPostSlugs = new Set(staticPosts.map((p) => p.slug));

/**
 * Slugs derivados do TÍTULO. Usado para esconder, na listagem, qualquer
 * post do ERP com o mesmo título de um estático.
 */
export const staticPostTitleSlugs = new Set(staticPosts.map((p) => slugify(p.title)));

export const findStaticPostBySlug = (slug?: string): Post | undefined =>
  staticPosts.find((p) => p.slug === slug || slugify(p.title) === slug);
