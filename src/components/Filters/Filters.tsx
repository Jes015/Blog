import { FilterBy, Search } from "@/components"
import styles from './filters.module.css'


export const Filters = () => {
    return (
        <div className={styles.filters}>
            <Search />
            <FilterBy />
        </div>
    )
}