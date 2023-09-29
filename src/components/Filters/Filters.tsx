import { FilterBy, Search } from '@/components'
import styles from './filters.module.css'

interface Props {
  setSearchParamValue: (searchParam: string) => void
  setFilterByCategory: (category: string) => void
}
export const Filters: React.FC<Props> = ({ setSearchParamValue, setFilterByCategory }) => {
  return (
        <div className={styles.filters}>
            <Search {...{ setSearchParamValue }} />
            <FilterBy {...{ setFilterByCategory }} />
        </div>
  )
}
