import styles from './heatMapFilters.module.css'

const buttons = ['2023', '2024']

export const HeatMapFilters = () => {
    return (
        <section className={styles.heatMapFilters__section}>
            <main>
                <ul className={styles.heatMapFilters__list}>
                    {buttons.map((buttonName) => (
                        <li key={buttonName}>
                            <button className={styles.heatMapFilters__button} >{buttonName}</button>
                        </li>
                    ))}
                </ul>
            </main>
        </section >
    )
}