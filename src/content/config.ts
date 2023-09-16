import { defineCollection, reference, z as zValidator } from 'astro:content'

const postsCollection = defineCollection({
  type: 'content',
  schema: zValidator.object({
    title: zValidator.string().min(16).max(54),
    description: zValidator.string().min(10).max(414),
    types: zValidator.array(zValidator.string()),
    publishDate: zValidator.date(),
    author: reference('authors'),
    relatedPosts: zValidator.array(reference('posts'))
  })
});

const authorsCollection = defineCollection({
  type: 'data',
  schema: zValidator.object({
    name: zValidator.string(),
    socials: zValidator.array(zValidator.object({
      name: zValidator.string(),
      url: zValidator.string()
    })).optional()
  })
})

export const collections = {
  'posts': postsCollection,
  'authors': authorsCollection
};