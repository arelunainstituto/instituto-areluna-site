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

export const fetchPostById = async (id: string): Promise<Post> => {
    const response = await fetch(`${API_URL}/api/public/marketing/posts/${id}`, {
        headers: HEADERS,
    });

    if (!response.ok) {
        throw new Error('Failed to fetch post');
    }

    return response.json();
};
