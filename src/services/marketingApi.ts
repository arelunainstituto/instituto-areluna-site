/** Subset de Post devolvido na lista `related_posts` (sem `content`). */
export interface RelatedPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    image_url: string;
    published_at: string;
}

export interface Post {
    id: string;
    title: string;
    excerpt: string;
    image_url: string;
    published_at: string;
    tags: string[];
    custom_author: string;
    author_id: string;
    author_name: string;
    content?: string; // Optional because list view doesn't have it
    updated_at?: string;
    /** Posts relacionados (resolvidos pelo backend a partir de related_post_ids). */
    related_posts?: RelatedPost[];
    /** IDs dos relacionados (não usado pelo frontend — usar `related_posts`). */
    related_post_ids?: string[];
    /** Explicit URL slug. When absent the title is slugified. Used by static posts. */
    slug?: string;
    /** Opening subtitle rendered in italic under the title (static posts). */
    subtitle?: string;
    /** Optional caption rendered under the hero image (static posts). */
    image_caption?: string;
    /** CSS `object-position` para o hero/thumbnail. Útil para fotos de retrato
     *  em que o rosto fica acima do centro (ex: `center 20%`, `top`). */
    image_object_position?: string;
    /** True for posts defined locally in the frontend (not from the ERP). */
    isStatic?: boolean;
}

export interface PostsResponse {
    data: Post[];
    meta: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_BLOG_PUBLIC_API_KEY;

const HEADERS = {
    'x-api-key': API_KEY,
    'Content-Type': 'application/json',
};

export const fetchPosts = async (page = 1, limit = 10): Promise<PostsResponse> => {
    const response = await fetch(`${API_URL}/api/public/marketing/posts?page=${page}&limit=${limit}`, {
        headers: HEADERS,
    });

    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }

    return response.json();
};

/** Travão de segurança: nunca pedimos mais do que isto à API. */
const MAX_PAGES = 20;

/**
 * Devolve **todos** os posts publicados.
 *
 * A listagem do blog pagina no cliente (12 por página) para poder
 * ordenar por data o conjunto completo — e, se voltarem a existir posts
 * estáticos, misturá-los na ordem certa. Pedimos um `limit` alto e, se
 * o backend o limitar (devolvendo `totalPages > 1`), buscamos as páginas
 * restantes em paralelo.
 */
export const fetchAllPosts = async (limit = 100): Promise<Post[]> => {
    const first = await fetchPosts(1, limit);
    const totalPages = Math.min(first.meta?.totalPages ?? 1, MAX_PAGES);

    if (totalPages <= 1) {
        return first.data;
    }

    const rest = await Promise.all(
        Array.from({ length: totalPages - 1 }, (_, i) => fetchPosts(i + 2, limit)),
    );

    return [...first.data, ...rest.flatMap((r) => r.data)];
};

export const fetchPostById = async (id: string): Promise<Post> => {
    const response = await fetch(`${API_URL}/api/public/marketing/posts/${id}`, {
        headers: HEADERS,
    });

    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }

    return response.json();
};
