import { CSearchParamsKeys, CTechs, type TTech } from '@/models'
import { useEffect, useId, useRef } from 'react'
import styles from './filterBy.module.css'

interface Props {
  setFilterByCategory: (category: string) => void
}

export const FilterBy: React.FC<Props> = ({ setFilterByCategory }) => {
  const selectElementRef = useRef<HTMLSelectElement>()
  const id = useId()


  useEffect(() => {
    if (selectElementRef.current == null) return

    const url = new URL(location.toString())
    const filterValue = url.searchParams.get(CSearchParamsKeys.filter)

    if (filterValue != null) {
      selectElementRef.current.value = filterValue
      setFilterByCategory(filterValue)
    }
  }, [])

  const handleOnInput = (event: React.FormEvent<HTMLSelectElement>): void => {
    const value = event.currentTarget.value
    setFilterByCategory(value)

    const newUrl = new URL(location.toString())

    newUrl.searchParams.delete(CSearchParamsKeys.filter)
    
    if (value !== CTechs.all.name) {
      newUrl.searchParams.append(CSearchParamsKeys.filter, value)
    } 

    history.pushState(null, '', newUrl)
  }

  return (
        <div
            className={styles.filterBy__container}
        >
            <label htmlFor={id} className={styles.filterBy__label}>
                Filter by
            </label>
            <select
                ref={selectElementRef as React.LegacyRef<HTMLSelectElement>}
                id={id}
                className={styles.filterBy} onInput={handleOnInput}
                style={{
                  backgroundColor: CTechs[selectElementRef.current?.value.toLowerCase() as TTech]?.color ?? 'transparent'
                }}
            >
                {Object.values(CTechs).map((postCategory) => (
                    <option
                        key={postCategory.name}
                        value={postCategory.name}
                        className={styles.filterBy__option}
                    >
                        {postCategory.name}
                    </option>
                ))}
            </select>
        </div>
  )
}
