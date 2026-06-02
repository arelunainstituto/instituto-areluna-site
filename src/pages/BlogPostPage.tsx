import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts, fetchPostById } from "@/services/marketingApi";
import { findStaticPostBySlug, ENABLE_ERP_POSTS } from "@/data/blogStaticPosts";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/utils";
import { ArrowLeft, Calendar, User, Phone } from "lucide-react";
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

    const postFromList = listData?.data.find((p) => slugify(p.title) === slug);
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

                    {/* CTA padronizado no final do artigo.
                        Posts estáticos já incluem o seu próprio CTA temático no conteúdo. */}
                    {!post.isStatic && (
                    <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl font-light text-gray-900 dark:text-white mb-2">
                            Ficou com dúvidas ou quer saber mais?
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 font-light">
                            A equipa do Instituto AreLuna está disponível para esclarecer todas as suas questões numa consulta personalizada.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/351916880662"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[hsl(var(--gold-leaf))] text-white font-medium hover:bg-amber-500 transition-colors duration-300"
                            >
                                <Phone className="mr-2 h-4 w-4" />
                                Falar por WhatsApp
                            </a>
                            <Link
                                to="/contato"
                                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-[hsl(var(--gold-leaf))] text-[hsl(var(--gold-leaf))] font-medium hover:bg-[hsl(var(--gold-leaf))]/10 transition-colors duration-300"
                            >
                                Marcar Consulta
                            </Link>
                        </div>
                    </div>
                    )}
                </article>
            </div>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
};

export default BlogPostPage;

