import { Tech } from '@/components/'
import styles from './post.module.css'

interface IStyles {
  border: 'post--border-top' | 'post--border'
  borderRadius?: 'post--border-radius-04'
  padding: 'post--padding-y' | 'post--padding-all'
  anchor: 'post__anchor--097' | 'post__anchor--130'
}

interface IProps {
  title?: string
  dynamicStyles: IStyles
}

export const PostCard: React.FC<IProps> = ({ dynamicStyles, title }) => {
  return (
    <article
      className={
        [
          styles.post,
          dynamicStyles.border === 'post--border' && styles['post--border'],
          dynamicStyles.border === 'post--border-top' && styles['post--border-top'],
          dynamicStyles.borderRadius === 'post--border-radius-04' && styles['post--border-radius-04'],
          dynamicStyles.padding === 'post--padding-all' && styles['post--padding-all'],
          dynamicStyles.padding === 'post--padding-y' && styles['post--padding-y'],
        ].join(' ')}>
      <header className={styles.post__header}>
        <div className={styles["post__title-container"]}>
          <a
            href="#"
            className={
              [
                styles.post__anchor,
                dynamicStyles.anchor === 'post__anchor--130' && styles['post__anchor--130'],
                dynamicStyles.anchor === 'post__anchor--097' && styles['post__anchor--097']
              ].join(' ')}
          >
            {title ?? 'Why github is the best way?'}
          </a>
        </div>
        <time className={styles.post__time} dateTime="2023-07-07">3 days ago</time>
      </header>
      <main className={styles.post__main}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore natus,
          odit veniam eius hic quam corporis temporibus ipsa rerum soluta numquam
          vero maxime nemo deserunt neque voluptatum animi qui facere.
        </p>
      </main>
      <footer>
        <div>
          <Tech name='javascript' />
        </div>
      </footer>
    </article>
  )
}