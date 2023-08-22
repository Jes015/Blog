import { Tech } from '@/components/'
import styles from './post.module.css'

interface IStyles {
  border: 'post--border-top' | 'post--border'
  borderRadius?: 'post--border-radius-04'
  padding: 'post--padding-y' | 'post--padding-all'
  anchor: 'post__anchor--097' | 'post__anchor--130'
}

interface IProps {
  dynamicStyles: IStyles
}

export const Post: React.FC<IProps> = ({ dynamicStyles }) => {
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
            Why github is the best way?
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

/* ---
import bookSVG from "@/assets/images/book.svg"
import Tech from "@/components/Tech.astro"
import { Image } from "astro:assets"
---

<article class="post">
  <header class="post__header">
    <div class="post__title-container">
      <Image src={bookSVG} alt="post icon" width="16" />
      <a href="#" class="post__link">Why github is the best way?</a>
    </div>
    <time class="post__time" datetime="2023-07-07">3 days ago</time>
  </header>
  <main class="post__main">
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore natus,
      odit veniam eius hic quam corporis temporibus ipsa rerum soluta numquam
      vero maxime nemo deserunt neque voluptatum animi qui facere.
    </p>
  </main>
  <footer>
    <div>
      <Tech name="javascript" />
    </div>
  </footer>
</article>

<style>
  .post {
    display: inline-flex;
    flex-direction: column;
    border: 0.1em solid var(--border-color);
    border-radius: 0.42857142857em;
    padding: 1.14285714286em;
    border-width: max(1px, 0.0625rem);
    overflow: hidden;
    color: var(--secondary-text-color);
  }

  .post__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.4em;
  }

  .post__title-container {
    display: flex;
    align-items: center;
    gap: 0.3em;
  }

  .post__time {
    font-size: 0.85em;
    text-transform: lowercase;
    text-wrap: balance;
  }

  .post__main {
    flex-grow: 1;
    font-size: 0.8em;
  }

  .post__link {
    font-size: 0.97em;
    color: var(--anchor-color);
    font-weight: 600;
    text-wrap: balance;
  }
</style>
 */