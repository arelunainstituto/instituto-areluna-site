import { slugify } from "@/lib/utils";

/**
 * Links internos do blog, pelo tema do slug e do título de cada post:
 * - post → página de tratamento e página de tratamento → posts (os mesmos
 *   pares, nos dois sentidos). Só temas em que a página trata diretamente do
 *   assunto: um post sobre queda de cabelo não liga ao transplante, por exemplo;
 * - post → outros posts do mesmo tema («Leia também»).
 * São estes links que levam o Google das páginas que visita muito (tratamentos,
 * artigos já indexados) aos artigos que ainda não conhece.
 */
export interface TreatmentLink {
  path: string;
  label: string;
}

const RULES: { pattern: RegExp; link: TreatmentLink }[] = [
  {
    pattern: /implante|all-on|reabilitacao-oral|ponte-dentaria|carga-imediata/,
    link: { path: "/implantes-dentarios-porto", label: "Implantes dentários no Porto" },
  },
  { pattern: /faceta/, link: { path: "/facetas-dentarias-porto", label: "Facetas dentárias no Porto" } },
  {
    pattern: /alinhador|invisalign|aparelho|ortodont/,
    link: { path: "/alinhadores-invisiveis-porto", label: "Alinhadores invisíveis no Porto" },
  },
  { pattern: /transplante|calvicie/, link: { path: "/transplante-capilar", label: "Transplante capilar" } },
  {
    pattern: /botox|toxina|harmonizacao|preenchimento|olheiras|bichectomia|estetica-facial|bioestimulador/,
    link: { path: "/estetica-facial", label: "Estética facial" },
  },
];

interface PostRef {
  slug?: string;
  title: string;
}

const postText = (post: PostRef) => `${post.slug ?? ""} ${slugify(post.title)}`;
const postSlug = (post: PostRef) => post.slug || slugify(post.title);

/** Até duas páginas de tratamento para o post, pela ordem das regras. */
export const treatmentLinksFor = (post: PostRef): TreatmentLink[] => {
  const text = postText(post);
  return RULES.filter((rule) => rule.pattern.test(text))
    .map((rule) => rule.link)
    .slice(0, 2);
};

/** Posts que ligam a esta página de tratamento; a página lista-os de volta (TopicArticles). */
export const postsForTreatment = <T extends PostRef>(posts: T[], path: string): T[] =>
  posts.filter((post) => treatmentLinksFor(post).some((link) => link.path === path));

/**
 * Temas do «Leia também». Mais largos do que as regras acima (a queda de cabelo
 * fica com o transplante, o branqueamento com as facetas); o que não encaixa
 * em nenhum é saúde oral geral, que também é um tema.
 */
const TOPICS = [
  /implante|all-on|reabilitacao-oral|ponte-dentaria|carga-imediata|dentes-fixos/,
  /faceta|branqueamento|sorriso-gengival/,
  /alinhador|invisalign|aparelho|ortodont/,
  /transplante|capilar|cabelo|calvicie/,
  /botox|toxina|harmonizacao|preenchimento|olheiras|bichectomia|estetica-facial|bioestimulador/,
];

const topicOf = (post: PostRef) => {
  const text = postText(post);
  return TOPICS.findIndex((pattern) => pattern.test(text));
};

/**
 * Artigos para o «Leia também» do post `current`: primeiro os do mesmo tema,
 * depois os outros, sempre a partir do artigo seguinte e em ciclo. Com `posts`
 * do mais recente para o mais antigo, cada artigo recebe links dos `count`
 * artigos anteriores do seu tema, mesmo os que já saíram da primeira página do
 * blog (sem isto, só a lista de /blog ligava a eles e o Google não os visitava).
 */
export const relatedPostsFor = <T extends PostRef>(posts: T[], current: PostRef, count = 3): T[] => {
  const slug = postSlug(current);
  const topic = topicOf(current);
  const after = (list: T[]) => {
    const i = list.findIndex((post) => postSlug(post) === slug);
    return i === -1 ? list : [...list.slice(i + 1), ...list.slice(0, i)];
  };
  const sameTopic = after(posts.filter((post) => topicOf(post) === topic));
  const others = after(posts).filter((post) => topicOf(post) !== topic);
  return [...sameTopic, ...others].slice(0, count);
};
