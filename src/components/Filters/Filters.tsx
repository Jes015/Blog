import { FilterBy, Search } from "@/components"
import styles from './filters.module.css'

interface Props {
    setDefaultSearchParamValue: React.Dispatch<React.SetStateAction<string>>
    setDefaultFilterBy: React.Dispatch<React.SetStateAction<string>>
}
export const Filters: React.FC<Props> = ({ setDefaultSearchParamValue, setDefaultFilterBy }) => {
    return (
        <div className={styles.filters}>
            <Search {...{ setDefaultSearchParamValue }} />
            <FilterBy {...{ setDefaultFilterBy }} />
        </div>
    )
}