import SearchIcon from '@/assets/images/search.svg'
import styles from '@/components/CommandMenu/commandMenu.module.css'
import { CommandInput } from 'cmdk'
import { useId } from 'react'

export const CommandHeader = () => {
    const inputID = useId()

    return (
        <header className={styles.commandMenu__header}>
            <div className={styles['commandMenu__search-container']}>
                <label htmlFor={inputID}>
                    <img className={styles['commandMenu__search-icon']} src={SearchIcon.src} alt='search icon' width={19} height={19} />
                </label>
                <CommandInput id={inputID} className={styles.commandMenu__input} />
            </div>
        </header>
    )
}