import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import blogPosts from "virtual:blog-posts";
import { Section, SectionHeading } from "@/components/site";
import { postsForTreatment } from "@/data/blogTreatmentLinks";

interface TopicArticlesProps {
  /** Caminho da página de tratamento, como em blogTreatmentLinks.ts. */
  treatmentPath: string;
  /** Tema no título: «Artigos sobre <topic>». */
  topic: string;
}

/**
 * Artigos do blog sobre o tratamento da página, antes do rodapé. A lista vem do
 * build (a mesma do sitemap), por isso os links já estão no HTML
 * pré-renderizado: o Google visita as páginas de tratamento muito mais vezes do
 * que o blog e chega por aqui aos artigos. Cada artigo liga de volta a esta
 * página («Saiba mais sobre o tratamento»).
 */
const TopicArticles = ({ treatmentPath, topic }: TopicArticlesProps) => {
  const posts = postsForTreatment(blogPosts, treatmentPath);
  if (posts.length === 0) return null;

  return (
    <Section tone="muted" spacing="compact" width="narrow" data-track-section="artigos-do-tema">
      <SectionHeading eyebrow="Blog" title="Artigos sobre" highlight={topic} className="mb-8 lg:mb-10" />
      <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={`/blog/${post.slug}`}
              className="font-light text-jet/80 underline-offset-4 hover:text-gold-leaf hover:underline dark:text-gray-300"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8 text-center">
        <Link
          to="/blog"
          className="inline-flex min-h-[44px] items-center gap-2 font-medium text-gold-leaf hover:underline"
        >
          Ver todos os artigos
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
};

export default TopicArticles;
