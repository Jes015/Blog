import { CTechs, type TTech } from "@/models"
import styles from './categoryTech.module.css'

interface IProps {
    name: TTech
}

export const CategoryTech: React.FC<IProps> = ({ name }) => {
    return (
        <div className={styles.tech}>
            <div className={styles["tech__color-container"]} style={{ backgroundColor: CTechs[name].color }} />
            <span className={styles.tech__title}>{CTechs[name].name}</span>
        </div>
    )
}