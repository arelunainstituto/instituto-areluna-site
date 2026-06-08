import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts, fetchPostById } from "@/services/marketingApi";
import { findStaticPostBySlug, ENABLE_ERP_POSTS } from "@/data/blogStaticPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/utils";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import SEOHead from "@/components/SEOHead";

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();

    // Posts estáticos (definidos no frontend) têm prioridade e dispensam a API.
    const staticPost = findStaticPostBySlug(slug);

    // 1. Fetch list to find ID from slug — só corre se o ERP estiver ativo.
    const { data: listData, isLoading: isListLoading, error: listError } = useQuery({
        queryKey: ["posts"],
        queryFn: () => fetchPosts(),
        enabled: ENABLE_ERP_POSTS && !staticPost,
    });

    const postFromList = listData?.data.find((p) => p.slug === slug || slugify(p.title) === slug);
    const postId = postFromList?.id;

    // 2. Fetch post details using ID — só corre se o ERP estiver ativo.
    const { data: apiPost, isLoading: isPostLoading, error: postError } = useQuery({
        queryKey: ["post", postId],
        queryFn: () => fetchPostById(postId!),
        enabled: ENABLE_ERP_POSTS && !!postId && !staticPost,
    });

    const post = staticPost ?? apiPost;
    const isLoading = !staticPost && (isListLoading || (!!postId && isPostLoading));
    const error = !staticPost && (listError || postError);

    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-24 max-w-4xl">
                <div className="space-y-6">
                    <Skeleton className="h-10 w-32" />
                    <Skeleton className="h-[400px] w-full rounded-2xl" />
                    <Skeleton className="h-12 w-3/4" />
                    <div className="flex gap-4">
                        <Skeleton className="h-4 w-32" />
                        <Skeleton className="h-4 w-32" />
                    </div>
                    <div className="space-y-4 pt-8">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                </div>
            </div>
        );
    }

    if (!staticPost && (error || (!isListLoading && !postId))) {
        return (
            <div className="container mx-auto px-4 py-32 text-center">
                <h2 className="text-3xl font-light mb-4">Artigo não encontrado</h2>
                <p className="text-gray-500 mb-8">O artigo que você procura não existe ou foi removido.</p>
                <Link to="/blog">
                    <Button>Voltar para o Blog</Button>
                </Link>
            </div>
        );
    }

    if (!post) return null;

    // Construir excerpt a partir do conteúdo se não existir
    const excerpt = post.excerpt
        || post.content?.replace(/<[^>]+>/g, '').slice(0, 155) + '…'
        || `Artigo do blog do Instituto AreLuna — ${post.title}`;

    const canonical = `https://www.institutoareluna.pt/blog/${slug}`;

    const blogPostingSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": excerpt.slice(0, 155),
        "image": post.image_url || "https://www.institutoareluna.pt/og-institutoareluna.jpg",
        "url": canonical,
        "datePublished": post.published_at,
        "dateModified": post.updated_at || post.published_at,
        "inLanguage": "pt-PT",
        "author": {
            "@type": "Person",
            "name": post.author_name || "Instituto AreLuna",
            "url": "https://www.institutoareluna.pt/sobre-a-fundadora"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Instituto AreLuna",
            "url": "https://www.institutoareluna.pt/",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.institutoareluna.pt/og-institutoareluna.jpg"
            }
        },
        "mainEntityOfPage": {"@type": "WebPage", "@id": canonical}
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <SEOHead
                title={post.title}
                description={excerpt.slice(0, 155)}
                canonical={canonical}
                ogImage={post.image_url || undefined}
                ogImageAlt={post.title}
                ogType="article"
                articlePublishedTime={post.published_at}
                articleModifiedTime={post.updated_at || post.published_at}
                jsonLd={blogPostingSchema}
            />
            <Header />
            <div className="pt-24 pb-16">
                <article className="container mx-auto px-4 max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center text-[hsl(var(--gold-leaf))] hover:underline mb-8 font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para o Blog
                    </Link>

                    {/* Ordem: título → subtítulo → autor/data → imagem destaque → conteúdo */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-4 text-gray-900 dark:text-white">
                        {post.title}
                    </h1>

                    {post.subtitle && (
                        <p className="text-lg md:text-xl italic text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                            {post.subtitle}
                        </p>
                    )}

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-8">
                        <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-[hsl(var(--gold-leaf))]" />
                            <time dateTime={post.published_at}>
                                {format(new Date(post.published_at), "d 'de' MMMM, yyyy", { locale: ptBR })}
                            </time>
                        </div>
                        {post.author_name && (
                            <div className="flex items-center">
                                <User className="mr-2 h-4 w-4 text-[hsl(var(--gold-leaf))]" />
                                <span>{post.author_name}</span>
                            </div>
                        )}
                    </div>

                    {post.image_url && (
                        <figure className="mb-10">
                            <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg">
                                <img
                                    src={post.image_url}
                                    alt={post.image_caption || post.title}
                                    loading="eager"
                                    decoding="async"
                                    className="w-full h-full object-cover"
                                    style={{ objectPosition: post.image_object_position }}
                                />
                            </div>
                            {post.image_caption && (
                                <figcaption className="text-center italic text-sm text-gray-500 mt-3">
                                    {post.image_caption}
                                </figcaption>
                            )}
                        </figure>
                    )}

                    <div
                        className="blog-content prose prose-lg dark:prose-invert max-w-none prose-a:text-[hsl(var(--gold-leaf))] prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: post.content || "" }}
                    />

                    {/* CTA padrão — mesmo visual do CTA usado nos artigos estáticos
                        (caixa verde, botão branco). Aplicado apenas para posts vindos
                        do ERP; os estáticos já injectam o seu próprio CTA temático. */}
                    {!post.isStatic && (
                        <div className="article-cta">
                            <p className="article-cta__text">
                                Cada caso é único. Fale com a nossa equipa para uma avaliação personalizada.
                            </p>
                            <a
                                className="article-cta__btn"
                                href={`https://wa.me/351910098226?text=${encodeURIComponent(`Olá! Li o artigo "${post.title}" no blog do Instituto Areluna e gostaria de uma avaliação personalizada.`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Falar com a nossa equipa
                            </a>
                        </div>
                    )}

                    {/* "Leia também" — alimentado pelo campo related_posts da API
                        (resolvido pelo backend a partir de related_post_ids). */}
                    {(() => {
                        const related = (post.related_posts ?? []).filter((rp) => rp.slug !== slug);
                        if (related.length === 0) return null;
                        return (
                            <aside className="article-leia-tambem">
                                <h2>Leia também</h2>
                                <ul>
                                    {related.map((rp) => (
                                        <li key={rp.id}>
                                            🦷 <Link to={`/blog/${rp.slug}`}>{rp.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </aside>
                        );
                    })()}
                </article>
            </div>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
};

export default BlogPostPage;

