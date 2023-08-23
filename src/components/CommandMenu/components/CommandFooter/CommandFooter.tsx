import styles from '@/components/CommandMenu/commandMenu.module.css'

export const CommandFooter = () => {
    return (
        <footer className={styles.commandMenu__footer}>
            <span>Search by</span>
            <span>
                <b>
                    <a className={styles.commandMenu__astro} target='_blank' href='https://docs.astro.build/es/guides/content-collections/#querying-collections'>Astro filters</a>
                </b>
            </span>
        </footer>
    )
}