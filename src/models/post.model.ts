import type { Author } from '@/models'

export type PostArray = PostData[]
export type RelatedPostArray = RelatedPost[]

export interface PostData {
  data: Post
  slug: string
}

export interface Post {
  title: string
  description: string
  types: string[]
  publishDate: number
  author: Author
  relatedPosts: RelatedPost[]
}

export interface RelatedPost {
  slug: string
  collection: string
}
