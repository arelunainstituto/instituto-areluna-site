import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/services/marketingApi";
import { staticPosts, staticPostTitleSlugs, ENABLE_ERP_POSTS } from "@/data/blogStaticPosts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { slugify } from "@/lib/utils";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BlogHeroSection from "@/components/BlogHeroSection";
import SEOHead from "@/components/SEOHead";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Blog Instituto AreLuna",
  "description": "Artigos sobre saúde oral, estética facial e bem-estar pela equipa clínica do Instituto AreLuna.",
  "url": "https://www.institutoareluna.pt/blog",
  "inLanguage": "pt-PT",
  "publisher": {
    "@type": "Organization",
    "name": "Instituto AreLuna",
    "url": "https://www.institutoareluna.pt/"
  }
};

const BlogPage = () => {
    // Enquanto ENABLE_ERP_POSTS = false, mostramos apenas os posts estáticos.
    // A query continua declarada mas desactivada para manter a ordem dos hooks estável.
    const { data, isLoading } = useQuery({
        queryKey: ["posts"],
        queryFn: () => fetchPosts(),
        enabled: ENABLE_ERP_POSTS,
    });

    if (ENABLE_ERP_POSTS && isLoading) {
        return (
            <div className="min-h-screen bg-white dark:bg-gray-950">
                <Header />
                <div className="pb-16 bg-white dark:bg-gray-950">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-light mb-12 text-center text-gray-900 dark:text-white">Blog</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="flex flex-col space-y-3">
                                    <Skeleton className="h-[200px] w-full rounded-xl" />
                                    <div className="space-y-2">
                                        <Skeleton className="h-4 w-3/4" />
                                        <Skeleton className="h-4 w-1/2" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Footer />
                <WhatsAppFloat />
            </div>
        );
    }

    // Posts estáticos (frontend) + (opcional) posts do ERP, sem duplicar pelo título.
    // Quando ENABLE_ERP_POSTS = false, `apiPosts` é sempre vazio.
    const apiPosts = ENABLE_ERP_POSTS
        ? (data?.data ?? []).filter((p) => !staticPostTitleSlugs.has(slugify(p.title)))
        : [];
    const posts = [...staticPosts, ...apiPosts].sort(
        (a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime(),
    );

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <SEOHead
              title="Blog de Saúde Oral e Estética | Instituto AreLuna"
              description="Artigos sobre saúde oral, estética facial e bem-estar da equipa clínica do Instituto AreLuna. Dicas e novidades de dentistas e especialistas especializados no Porto."
              canonical="https://www.institutoareluna.pt/blog"
              jsonLd={blogSchema}
            />
            <Header />
            <BlogHeroSection />
            <div className="pt-16 pb-16 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => (
                            <Link key={post.id} to={`/blog/${post.slug ?? slugify(post.title)}`} className="group">
                                <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 group-hover:-translate-y-1">
                                    <div className="aspect-video w-full overflow-hidden">
                                        <img
                                            src={post.image_url || "/placeholder.svg"}
                                            alt={`${post.title} — Instituto AreLuna`}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            style={{ objectPosition: post.image_object_position }}
                                        />
                                    </div>
                                    <CardHeader>
                                        <div className="text-xs text-[hsl(var(--gold-leaf))] mb-2 font-medium tracking-wider uppercase">
                                            {format(new Date(post.published_at), "d 'de' MMMM, yyyy", { locale: ptBR })}
                                        </div>
                                        <CardTitle className="text-xl font-medium leading-tight group-hover:text-[hsl(var(--gold-leaf))] transition-colors">
                                            {post.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-500 dark:text-gray-400 line-clamp-3 font-light">
                                            {post.excerpt || "Leia mais sobre este assunto em nosso blog..."}
                                        </p>
                                        <div className="mt-4 text-sm font-medium text-[hsl(var(--gold-leaf))] flex items-center">
                                            Ler artigo
                                            <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
};

export default BlogPage;
