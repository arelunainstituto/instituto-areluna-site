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
