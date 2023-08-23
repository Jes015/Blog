import styles from './categoriesFilters.module.css'

export const CategoriesFilters = () => {
    return (
        <div className={styles.categoriesFilters} id='category__filters'>
            <input className={styles.categoriesFilters__input} id='category__search' placeholder='Find a post...' type="text" />
            <div className={styles['categoriesFilters__select-container']} id='category__select-container'>
                <button className={styles['categoriesFilters__select']}>Type</button>
                <button className={styles['categoriesFilters__select']}>Language</button>
                <button className={styles['categoriesFilters__select']}>Sort</button>
            </div>
        </div>
    )
}