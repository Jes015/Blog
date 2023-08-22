import styles from './categoriesFilters.module.css'

export const CategoriesFilters = () => {
    return (
        <section className={styles.categoriesFilters}>
            <input className={styles.categoriesFilters__input} placeholder='Find a post...' type="text" />
            <div className={styles['categoriesFilters__btn-container']}>
                <button className={styles['categoriesFilters__btn']}>Type</button>
                <button className={styles['categoriesFilters__btn']}>Language</button>
                <button className={styles['categoriesFilters__btn']}>Sort</button>
            </div>
            <button className={styles.categoriesFilters__btn}>New</button>
        </section>
    )
}