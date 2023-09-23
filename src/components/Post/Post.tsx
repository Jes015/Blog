import { Tech } from '@/components/'
import type { TTech } from '@/models'
import { getTimeAgo } from '@/utils'
import styles from './post.module.css'

interface IProps {
  title: string
  url: string
  description: string
  techs: string[]
  publishDate: number
}

export const PostCard: React.FC<IProps> = ({ title, url, description, techs, publishDate }) => {
  return (
    <article
      className={styles.post}>
      <header className={styles.post__header}>
        <div className={styles['post__title-container']}>
          <a
            href={url}
            className={styles.post__anchor}
          >
            {title ?? 'Why github is the best way?'}
          </a>
        </div>
        <time className={styles.post__time} dateTime="2023-07-07">{getTimeAgo(publishDate)}</time>
      </header>
      <main className={styles.post__main}>
        <p>
          {description}
        </p>
      </main>
      <footer>
        <div>
          {
            techs.map((tech) => {
              return <Tech key={tech} name={tech as TTech} />
            })
          }
        </div>
      </footer>
    </article>
  )
}
