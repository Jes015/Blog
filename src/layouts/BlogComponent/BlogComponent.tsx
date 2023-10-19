import styles from './blogComponent.module.css'

interface Props {
    children: React.ReactNode
}

export const BlogComponent = ({ children }: Props) => {
    return (
        <div className={styles.blogComponent}>
            {children}
        </div>
    )
}

const BlogComponentHeader = ({ children }: Props) => {
    return (
        <header className={styles.blogComponent__header}>
            {children}
        </header>
    )
}

const BlogComponentContent = ({ children }: Props) => {
    return (
        <div className={styles.code__content}>
            {children}
        </div>
    )
}

BlogComponent.Header = BlogComponentHeader
BlogComponent.Content = BlogComponentContent