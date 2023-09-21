import { NotFoundIcon } from "@/components"
import styles from './notFound.module.css'

export const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <NotFoundIcon
                className={styles.notFound__icon}
            />
            <h2>NOT FOUND</h2>
        </div>
    )
}