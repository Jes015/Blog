import { Tech } from '@/components/'
import styles from './post.module.css'

interface IProps {
  title?: string
}

export const PostCard: React.FC<IProps> = ({ title }) => {
  return (
    <article
      className={styles.post}>
      <header className={styles.post__header}>
        <div className={styles["post__title-container"]}>
          <a
            href="#"
            className={styles.post__anchor}
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