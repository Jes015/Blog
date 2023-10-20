import styles from './elements.module.css'

interface IProps {
  children: React.ReactNode
}

export const Elements: React.FC<IProps> = ({ children }) => {
  return (
        <div
            className={styles.elements}
        >
            {children}
        </div>
  )
}
