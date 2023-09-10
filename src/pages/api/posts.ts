import type { APIRoute } from "astro"
import { getCollection } from "astro:content"

export const GET: APIRoute = async ({ url }) => {

	const postSearch = url.searchParams.get('name')
	const postSearchType = url.searchParams.get('type')

	if (postSearch == null || postSearchType == null) {
		return new Response(JSON.stringify({ error: 'INVALID_PARAMS' }),
			{
				status: 404,
				headers: {
					'Content-Type': "application/json"
				}
			}
		)
	}

	const postsData = await getCollection('posts')
	const formattedPostsData = postsData.map((postData) => ({ slug: postData.slug, postData }))
	let responsePosts = formattedPostsData.filter((post) => {
		const isTheFilterInThisPost = post.postData.data.types.includes(postSearchType.toLowerCase())

		return isTheFilterInThisPost
	})

	if (postSearch === '') {
		responsePosts = responsePosts.slice(0, 10)
	} else {
		const foundPostsData = responsePosts.filter(
			(post) => {
				const areTheCharactersInThePostTitle = post.postData.data.title.toLocaleLowerCase().trim().includes(postSearch.toLocaleLowerCase().trim())

				return areTheCharactersInThePostTitle
			}
		)

		responsePosts = foundPostsData

	}

	const response = new Response(JSON.stringify({ postsData: responsePosts }), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	})

	return response
}