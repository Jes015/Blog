import { Command } from 'cmdk'
import { createPortal } from 'react-dom'
import styles from './commandMenu.module.css'
import { CommandFooter, CommandHeader, CommandMain } from './components'

interface IPros {
    toggleModalStatus: () => void
}
export const CommandMenu: React.FC<IPros> = ({ toggleModalStatus }) => {


    const handleOnBackDropClick = () => {
        toggleModalStatus()
    }

    const handleOnModalClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation()
    }
    return createPortal(
        <div onClick={handleOnBackDropClick} className={styles.commandMenu__container}>
            <Command onClick={handleOnModalClick} className={styles.commandMenu} label="Command Menu">
                <CommandHeader />
                <CommandMain />
                <CommandFooter />
            </Command>
        </div>,
        document.getElementById('modal') as HTMLElement
    )
}