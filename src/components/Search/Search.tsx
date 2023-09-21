import { SearchIcon } from "@/components"
import { useId, useState } from "react"
import styles from './search.module.css'

interface Props {
  setSearchParamValue: React.Dispatch<React.SetStateAction<string>>
}
export const Search: React.FC<Props> = ({ setSearchParamValue }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const inputId = useId()

  const handleOnClick = () => {
    setModalOpen(!modalOpen)
  }

  const handleOnInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setSearchParamValue(value)
  }

  return (
    <div onClick={handleOnClick} className={styles.search__container} id="header__search">
      <label htmlFor={inputId} className={styles.search__label}>
        Search
      </label>
      <div className={styles.search}>
        <SearchIcon
          className={styles['search__search-icon']}
        />
        <input
          id={inputId}
          type="text"
          className={styles.search__input}
          placeholder="Test e2e for..."
          onInput={handleOnInputChange}
        />
      </div>
    </div>

  )
}
