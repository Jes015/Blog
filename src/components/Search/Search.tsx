import { SearchIcon } from '@/components'
import { CSearchParamsKeys } from '@/models'
import { useEffect, useId, useRef, type LegacyRef } from 'react'
import styles from './search.module.css'

interface Props {
  setSearchParamValue: (searchParam: string) => void
}

export const Search: React.FC<Props> = ({ setSearchParamValue }) => {
  const inputId = useId()
  const inputElementRef = useRef<HTMLInputElement>()

  useEffect(() => {
    if (inputElementRef.current == null) return

    const url = new URL(location.toString())
    const searchValue = url.searchParams.get(CSearchParamsKeys.search)

    if (searchValue != null) {
      inputElementRef.current.value = searchValue
      setSearchParamValue(searchValue)
    }
  }, [])

  const handleOnInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    console.log('nuevo input', value)
    setSearchParamValue(value)

    const newUrl = new URL(location.toString())

    newUrl.searchParams.delete(CSearchParamsKeys.search)

    if (value !== '') {
      newUrl.searchParams.append(CSearchParamsKeys.search, value)
    }

    history.pushState(null, '', newUrl)
  }

  return (
    <div className={styles.search__container} id="header__search">
      <label htmlFor={inputId} className={styles.search__label}>
        Search
      </label>
      <div className={styles.search}>
        <SearchIcon
          className={styles['search__search-icon']}
        />
        <input
          id={inputId}
          ref={inputElementRef as LegacyRef<HTMLInputElement>}
          type="text"
          className={styles.search__input}
          placeholder="Test e2e for..."
          onInput={handleOnInputChange}
        />
      </div>
    </div>

  )
}
