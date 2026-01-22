import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "@/services/marketingApi";
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

const BlogPage = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["posts"],
        queryFn: () => fetchPosts(),
    });

    if (isLoading) {
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

    if (error) {
        return (
            <div className="min-h-screen bg-white dark:bg-gray-950">
                <Header />
                <div className="pt-32 pb-16">
                    <div className="container mx-auto px-4 py-24 text-center">
                        <p className="text-red-500">Erro ao carregar posts. Por favor, tente novamente mais tarde.</p>
                    </div>
                </div>
                <Footer />
                <WhatsAppFloat />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <Header />
            <BlogHeroSection />
            <div className="pt-16 pb-16 bg-white dark:bg-gray-950">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data?.data.map((post) => (
                            <Link key={post.id} to={`/blog/${slugify(post.title)}`} className="group">
                                <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900 group-hover:-translate-y-1">
                                    <div className="aspect-video w-full overflow-hidden">
                                        <img
                                            src={post.image_url || "/placeholder.svg"}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
