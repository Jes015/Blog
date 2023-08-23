import styles from '@/components/CommandMenu/commandMenu.module.css'
import { CustomCommandItem } from '@/components/CommandMenu/components'
import { CommandEmpty, CommandGroup, CommandList } from 'cmdk'

export const CommandMain = () => {
    return (
        <main className={styles.commandMenu__main}>
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Results">
                    <CustomCommandItem />
                </CommandGroup>
                <CommandGroup heading="New">
                    <CustomCommandItem />
                </CommandGroup>
            </CommandList>
        </main>
    )
}