import BookIcon from '@/assets/images/book.svg'
import { CRoutes } from '@/models'
import { CommandItem as DefaultCommandItem } from 'cmdk'
import styles from './commandItem.module.css'

export const CustomCommandItem = () => {
    return (
        <DefaultCommandItem className={styles.commandItem__container}>
            <header>
                <div className={styles['commandItem__title-container']}>
                    <img className={styles.commandItem__icon} src={BookIcon.src} alt="post icon" width={16} height={16} />
                    <a className={styles.commandItem__ancord} href={CRoutes.post.path}>Link</a>
                </div>
            </header>
            <footer>
                <time className={styles.commandItem__time} dateTime='2023/07/24'>3 hours ago</time>
            </footer>
        </DefaultCommandItem>
    )
}