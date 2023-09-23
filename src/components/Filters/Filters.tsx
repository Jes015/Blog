import { FilterBy, Search } from '@/components'
import styles from './filters.module.css'

interface Props {
  setSearchParamValue: React.Dispatch<React.SetStateAction<string>>
  setFilterByCategory: React.Dispatch<React.SetStateAction<string>>
}
export const Filters: React.FC<Props> = ({ setSearchParamValue, setFilterByCategory }) => {
  return (
        <div className={styles.filters}>
            <Search {...{ setSearchParamValue }} />
            <FilterBy {...{ setFilterByCategory }} />
        </div>
  )
}
