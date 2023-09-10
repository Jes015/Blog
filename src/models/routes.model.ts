export const CFrontRoutes = {
    home: {
        name: 'Home',
        path: '/',
    },
    posts: {
        name: 'Posts',
        path: '/posts',
    },
    post(postSlug: string) {
        return `/post/${postSlug}`
    }
}

export const CBackRoutes = {
    posts (searchParam: string, category?: string) {
        return `/api/posts?name=${searchParam}&type=${category}`
    }
}
