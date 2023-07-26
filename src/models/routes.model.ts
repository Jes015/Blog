import CategoriesIcon from '@/assets/images/categories.svg'
import HomeIcon from '@/assets/images/home.svg'
import ProjectsIcon from '@/assets/images/projects.svg'

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
    projects: {
        name: 'Projects',
        path: '/projects',
        iconData: ProjectsIcon
    }
}
