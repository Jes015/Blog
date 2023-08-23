import { CategoriesFilters } from '@/components/Categories/components'
import styles from './categoriesActions.module.css'

export const CategoriesActions = () => {
    return (
        <section className={styles.categoriesActions}>
            <CategoriesFilters />
            <button className={styles.categoriesFilters__btn} id='category__request-btn'>Request</button>
        </section>
    )
}