/// <reference types="vite/client" />

/** Posts do blog lidos do ERP no build (plugin blogPostsModule em vite.config.ts). */
declare module "virtual:blog-posts" {
  const posts: { id: string; slug: string; title: string }[];
  export default posts;
}
