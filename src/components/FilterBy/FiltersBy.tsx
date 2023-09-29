import { CTechs, type TTech } from '@/models'
import { useId, useRef } from 'react'
import styles from './filterBy.module.css'

interface Props {
  setFilterByCategory: (category: string) => void
}
export const FilterBy: React.FC<Props> = ({ setFilterByCategory }) => {
  const selectElementRef = useRef<HTMLSelectElement>()
  const id = useId()

  const handleOnInput = (event: React.FormEvent<HTMLSelectElement>): void => {
    const newInput = event.currentTarget.value
    setFilterByCategory(newInput)
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
                    >
                        {postCategory.name}
                    </option>
                ))}
            </select>
        </div>
  )
}
