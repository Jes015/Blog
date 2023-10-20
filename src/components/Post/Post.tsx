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
    <a
      href={url}
      className={styles.post}>
      <header className={styles.post__header}>
        <div className={styles['post__title-container']}>
          <h3

            className={styles.post__anchor}
          >
            {title ?? 'Why github is the best way?'}
          </h3>
        </div>
        <time className={styles.post__time} dateTime="2023-07-07">{getTimeAgo(publishDate)}</time>
      </header>
      <div className={styles.post__content}>
        <p className={styles.post__description}>
          {description}
        </p>
      </div>
      <footer>
        <div>
          {
            techs.map((tech) => {
              return <Tech key={tech} name={tech as TTech} />
            })
          }
        </div>
      </footer>
    </a>
  )
}
