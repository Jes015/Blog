import BookIcon from '@/assets/images/book.svg'
import CategoriesIcon from '@/assets/images/categories.svg'
import HomeIcon from '@/assets/images/home.svg'

export const CRoutes = {
    home: {
        name: 'Home',
        path: '/',
        iconData: HomeIcon,
    },
    categories: {
        name: 'Categories',
        path: '/categories',
        iconData: CategoriesIcon
    },
    post: {
        name: 'Post',
        path: '/post',
        iconData: BookIcon
    }
}
