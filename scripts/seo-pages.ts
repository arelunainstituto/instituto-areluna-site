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
  title: string;
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
  meta?: { total?: number; totalPages?: number };
}

/** Travão de segurança, igual ao de fetchAllPosts em src/services/marketingApi.ts. */
const MAX_PAGES = 20;

/**
 * Lê todos os posts publicados na API do ERP. Se a API falhar, não responder
 * em 30 s ou devolver uma lista vazia ou incompleta, o build falha de
 * propósito: a Vercel mantém o deploy anterior em vez de publicar posts sem
 * prerender.
 */
export async function fetchBlogPostRoutes(apiUrl?: string, apiKey?: string): Promise<BlogPostRoute[]> {
  if (!apiUrl || !apiKey) {
    throw new Error("seo-pages: VITE_API_URL ou VITE_BLOG_PUBLIC_API_KEY em falta; sem eles não há lista de posts para o prerender.");
  }

  const fetchPage = async (page: number): Promise<ErpPostsPage> => {
    const res = await fetch(`${apiUrl}/api/public/marketing/posts?page=${page}&limit=100`, {
      headers: { "x-api-key": apiKey },
      signal: AbortSignal.timeout(30_000),
    });
    if (!res.ok) throw new Error(`seo-pages: a API do ERP respondeu ${res.status} na página ${page} de posts.`);
    return (await res.json()) as ErpPostsPage;
  };

  const first = await fetchPage(1);
  const totalPages = Math.min(first.meta?.totalPages ?? 1, MAX_PAGES);
  const rest = await Promise.all(Array.from({ length: totalPages - 1 }, (_, i) => fetchPage(i + 2)));
  const posts = [...first.data, ...rest.flatMap((r) => r.data)];
  if (posts.length === 0 || (first.meta?.total !== undefined && posts.length !== first.meta.total)) {
    throw new Error(`seo-pages: a API do ERP devolveu ${posts.length} posts de ${first.meta?.total ?? "?"}.`);
  }

  // O mesmo slug que BlogPostPage aceita: o explícito ou, na falta dele, o do título.
  // Um slug fora do padrão fica fora do prerender e do sitemap (abre na mesma pelo
  // index_fallback.html), em vez de bloquear todos os deploys até alguém o corrigir no ERP.
  return posts.flatMap((post) => {
    const slug = post.slug || slugify(post.title);
    if (!/^[a-z0-9-]+$/.test(slug)) {
      console.warn(`seo-pages: slug fora do padrão no ERP, post ignorado («${slug}», «${post.title}»).`);
      return [];
    }
    const dates = [post.published_at, post.updated_at].filter(Boolean).map((d) => d!.slice(0, 10));
    return [{ slug, title: post.title, lastmod: dates.sort().at(-1) ?? "" }];
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

/**
 * llms.txt (https://llmstxt.org): o resumo do site que os assistentes de IA
 * leem. Lista as páginas indexáveis e todos os posts deste build, para estar
 * sempre igual ao sitemap. Texto revisto para a ERS (DL 238/2015). Dos posts
 * entra só o título: os resumos vêm do ERP sem essa revisão.
 */
export function buildLlmsTxt(posts: BlogPostRoute[]): string {
  const link = (title: string, path: string, note?: string) =>
    `- [${title.replace(/[[\]]/g, "").replace(/\s+/g, " ").trim()}](${SITE_URL}${path})${note ? `: ${note}` : ""}`;
  const articles = [...posts]
    .sort((a, b) => b.lastmod.localeCompare(a.lastmod) || a.slug.localeCompare(b.slug))
    .map((post) => link(post.title, blogPostPath(post)));
  return [
    "# Instituto AreLuna",
    "",
    "> Clínica no Porto com equipa multidisciplinar que reúne medicina dentária, medicina estética e tratamentos capilares. Cada plano de tratamento resulta de uma consulta de avaliação e de diagnóstico individual, na qual são explicadas as opções indicadas, os riscos e os custos.",
    "",
    "Unidade Mota Galiza: Rua Júlio Dinis, n.º 194, 4050-327 Porto. Telefone: +351 220 430 090. Registo ERS n.º 161637.",
    "",
    "## Páginas principais",
    "",
    link("Página inicial", "/", "apresentação do Instituto AreLuna"),
    link("Tratamentos", "/tratamentos", "áreas de tratamento e consulta de avaliação"),
    link("Sobre a fundadora", "/sobre-a-fundadora", "equipa e percurso da fundadora"),
    link("Contacto", "/contato", "contactos e marcação de consulta"),
    link("Blog", "/blog", "artigos informativos sobre saúde e tratamentos"),
    "",
    "## Tratamentos",
    "",
    link("Transplante capilar", "/transplante-capilar", "tratamento capilar, definido após avaliação clínica"),
    link("Estética facial", "/estetica-facial", "medicina estética facial"),
    link("Implantes dentários no Porto", "/implantes-dentarios-porto", "reabilitação oral com implantes"),
    link("Alinhadores invisíveis no Porto", "/alinhadores-invisiveis-porto", "correção ortodôntica com alinhadores transparentes removíveis"),
    link("Facetas dentárias no Porto", "/facetas-dentarias-porto", "estética dentária"),
    "",
    "## Artigos do blog",
    "",
    ...articles,
    "",
    "## Outros recursos",
    "",
    link("Sitemap", "/sitemap.xml", "lista das páginas públicas"),
    "",
  ].join("\n");
}
