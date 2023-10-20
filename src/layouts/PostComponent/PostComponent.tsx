import styles from './postComponent.module.css'

interface Props {
    children: React.ReactNode
}

export const PostComponent = ({ children }: Props) => {
    return (
        <div className={styles.postComponent}>
            {children}
        </div>
    )
}

const PostComponentHeader = ({ children }: Props) => {
    return (
        <header className={styles.postComponent__header}>
            {children}
        </header>
    )
}

const PostComponentContent = ({ children }: Props) => {
    return (
        <div className={styles.postComponent__content}>
            {children}
        </div>
    )
}

PostComponent.Header = PostComponentHeader
PostComponent.Content = PostComponentContent