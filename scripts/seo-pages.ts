// Páginas do site para o prerender e o sitemap. Só corre no build (importado
// por vite.config.ts). Os posts do blog vêm da API do ERP nesse momento e a
// mesma lista alimenta o prerender e o sitemap, para nunca divergirem: com as
// duas listas mantidas à mão, 26 posts do sitemap ficaram sem prerender e eram
// servidos com o HTML (e a canonical) da home.
import { slugify } from "../src/lib/utils";

export const SITE_URL = "https://www.institutoareluna.pt";

/** Páginas indexáveis: entram no sitemap e são pré-renderizadas. */
export const INDEXABLE_PAGES = [
  "/",
  "/tratamentos",
  "/transplante-capilar",
  "/estetica-facial",
  "/contato",
  "/blog",
  "/sobre-a-fundadora",
  "/implantes-dentarios-porto",
  "/alinhadores-invisiveis-porto",
  "/facetas-dentarias-porto",
];

/**
 * Pré-renderizadas mas fora do sitemap: noindex (/privacidade, /termos,
 * /obrigado, /pacientes-internacionais) ou com a canonical noutra página
 * (/casos-clinicos → /, /ortodontia → /tratamentos). A rota /404 gera a
 * página de erro que o postbuild move para dist/404.html: a Vercel serve-a,
 * com status 404, a qualquer endereço sem ficheiro nem rewrite.
 */
export const UNLISTED_PAGES = [
  "/casos-clinicos",
  "/ortodontia",
  "/privacidade",
  "/termos",
  "/obrigado",
  "/pacientes-internacionais",
  "/404",
];

export interface BlogPostRoute {
  slug: string;
  /** AAAA-MM-DD — a data mais recente entre publicação e edição. */
  lastmod: string;
}

interface ErpPost {
  title: string;
  slug?: string;
  published_at?: string;
  updated_at?: string;
}

interface ErpPostsPage {
  data: ErpPost[];
  meta?: { totalPages?: number };
}

/** Travão de segurança, igual ao de fetchAllPosts em src/services/marketingApi.ts. */
const MAX_PAGES = 20;

/**
 * Lê todos os posts publicados na API do ERP. Se a API falhar, o build falha
 * de propósito: a Vercel mantém o deploy anterior em vez de publicar posts sem
 * prerender.
 */
export async function fetchBlogPostRoutes(apiUrl?: string, apiKey?: string): Promise<BlogPostRoute[]> {
  if (!apiUrl || !apiKey) {
    throw new Error("seo-pages: VITE_API_URL ou VITE_BLOG_PUBLIC_API_KEY em falta; sem eles não há lista de posts para o prerender.");
  }

  const fetchPage = async (page: number): Promise<ErpPostsPage> => {
    const res = await fetch(`${apiUrl}/api/public/marketing/posts?page=${page}&limit=100`, {
      headers: { "x-api-key": apiKey },
    });
    if (!res.ok) throw new Error(`seo-pages: a API do ERP respondeu ${res.status} na página ${page} de posts.`);
    return (await res.json()) as ErpPostsPage;
  };

  const first = await fetchPage(1);
  const totalPages = Math.min(first.meta?.totalPages ?? 1, MAX_PAGES);
  const rest = await Promise.all(Array.from({ length: totalPages - 1 }, (_, i) => fetchPage(i + 2)));
  const posts = [...first.data, ...rest.flatMap((r) => r.data)];

  // O mesmo slug que BlogPostPage aceita: o explícito ou, na falta dele, o do título.
  return posts.map((post) => {
    const slug = post.slug || slugify(post.title);
    if (!/^[a-z0-9-]+$/.test(slug)) {
      throw new Error(`seo-pages: slug inválido no ERP («${slug}», post «${post.title}»).`);
    }
    const dates = [post.published_at, post.updated_at].filter(Boolean).map((d) => d!.slice(0, 10));
    return { slug, lastmod: dates.sort().at(-1) ?? "" };
  });
}

export const blogPostPath = (post: BlogPostRoute) => `/blog/${post.slug}`;

/** sitemap.xml com as páginas indexáveis e todos os posts. */
export function buildSitemap(posts: BlogPostRoute[]): string {
  const latestPost = posts.map((p) => p.lastmod).sort().at(-1);
  const entries = [
    ...INDEXABLE_PAGES.map((path) => ({ loc: SITE_URL + path, lastmod: path === "/blog" ? latestPost : undefined })),
    ...posts.map((post) => ({ loc: SITE_URL + blogPostPath(post), lastmod: post.lastmod })),
  ];
  const urls = entries.map(({ loc, lastmod }) =>
    ["  <url>", `    <loc>${loc}</loc>`, ...(lastmod ? [`    <lastmod>${lastmod}</lastmod>`] : []), "  </url>"].join("\n"),
  );
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}
