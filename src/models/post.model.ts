import type { Author } from "@/models"

export type PostArray = PostsData[]

export interface PostsData {
    postData: {
        data: Post
    }
    slug: string
}

export interface Post {
    title:        string;
    description:  string;
    types:        string[];
    publishDate:  Date;
    author:       Author;
    relatedPosts: RelatedPost[];
}

export interface RelatedPost {
    slug:       string;
    collection: string;
}

export const postCategories = {
    javascript: 'JavaScript',
    typescript: 'TypeScript',
    react: 'React',
    astro: 'Astro',
    bun: 'Bun'
}