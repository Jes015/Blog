export const CFrontRoutes = {
    static: {
        home: {
            name: 'Home',
            path: '/',
        },
        posts: {
            name: 'Posts',
            path: '/posts',
        },
    },
    dynamic: {
        post(postSlug: string) {
            return `/post/${postSlug}`
        }
    }
}

export const CBackRoutes = {
    posts (searchParam: string, category?: string) {
        return `/api/posts?name=${searchParam}&type=${category}`
    }
}
