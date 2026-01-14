import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts, fetchPostById } from "@/services/marketingApi";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { slugify } from "@/lib/utils";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();

    // 1. Fetch list to find ID from slug
    const { data: listData, isLoading: isListLoading, error: listError } = useQuery({
        queryKey: ["posts"],
        queryFn: () => fetchPosts(),
    });

    const postFromList = listData?.data.find((p) => slugify(p.title) === slug);
    const postId = postFromList?.id;

    // 2. Fetch post details using ID
    const { data: post, isLoading: isPostLoading, error: postError } = useQuery({
        queryKey: ["post", postId],
        queryFn: () => fetchPostById(postId!),
        enabled: !!postId,
    });

    const isLoading = isListLoading || (!!postId && isPostLoading);
    const error = listError || postError;

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

    if (error || (!isListLoading && !postId)) {
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

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950">
            <Header />
            <div className="pt-24 pb-16">
                <article className="container mx-auto px-4 max-w-4xl">
                    <Link to="/blog" className="inline-flex items-center text-[hsl(var(--gold-leaf))] hover:underline mb-8 font-medium">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para o Blog
                    </Link>

                    {post.image_url && (
                        <div className="aspect-video w-full overflow-hidden rounded-2xl mb-8 shadow-lg">
                            <img
                                src={post.image_url}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <h1 className="text-3xl md:text-5xl font-light leading-tight mb-6 text-gray-900 dark:text-white">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-10 border-b border-gray-100 dark:border-gray-800 pb-8">
                        <div className="flex items-center">
                            <Calendar className="mr-2 h-4 w-4 text-[hsl(var(--gold-leaf))]" />
                            {format(new Date(post.published_at), "d 'de' MMMM, yyyy", { locale: ptBR })}
                        </div>
                        {post.author_name && (
                            <div className="flex items-center">
                                <User className="mr-2 h-4 w-4 text-[hsl(var(--gold-leaf))]" />
                                {post.author_name}
                            </div>
                        )}
                    </div>

                    <div
                        className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-light prose-a:text-[hsl(var(--gold-leaf))] prose-img:rounded-xl prose-p:my-2"
                        dangerouslySetInnerHTML={{ __html: post.content || "" }}
                    />
                </article>
            </div>
            <Footer />
            <WhatsAppFloat />
        </div>
    );
};

export default BlogPostPage;
