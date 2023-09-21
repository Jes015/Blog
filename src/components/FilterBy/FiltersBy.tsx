import { postCategories } from '@/models'
import { useId } from 'react'
import styles from './filterBy.module.css'

interface Props {
    setFilterByCategory: React.Dispatch<React.SetStateAction<string>>
}
export const FilterBy: React.FC<Props> = ({ setFilterByCategory }) => {
    const id = useId()

    const handleOnInput = (event: React.FormEvent<HTMLSelectElement>) => {
        const newInput = event.currentTarget.value
        setFilterByCategory(newInput)
    }
    return (
        <div className={styles.filterBy__container}>
            <label htmlFor={id} className={styles.filterBy__label}>
                Filter by
            </label>
            <select id={id} className={styles.filterBy} onInput={handleOnInput}>
                {Object.values(postCategories).map((postCategory) => (
                    <option
                     key={postCategory}
                     value={postCategory}
                    >
                        {postCategory}
                    </option>
                ))}
            </select>
        </div>
    )
}