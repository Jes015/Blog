import { useId } from 'react'
import styles from './filterBy.module.css'
export const FilterBy = () => {
    const id = useId()
    return (
        <div className={styles.filterBy__container}>
            <label htmlFor={id} className={styles.filterBy__label}>
                Filter by
            </label>
            <select id={id} className={styles.filterBy}>
                <option value="">JavaScript</option>
                <option value="">JavaScript</option>
                <option value="">JavaScript</option>
                <option value="" >JavaScript</option>
                <option value="" >JavaScript</option>
            </select>
        </div>
    )
}