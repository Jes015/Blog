import { IconHashtag } from '@/components/Icons'
import styles from './title.module.css'

interface TitleProps {
  as?: keyof JSX.IntrinsicElements
  titleId?: string
  children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ as, children, titleId }) => {
  const ElementTitle = as ?? 'h1'

  const handleOnClickForCopy = () => {
    const titleHash = titleId ?? 'noLink'
    const titleURL = new URL(location.toString())
    titleURL.hash = titleHash
    void navigator.clipboard.writeText(titleURL.toString())
  }

  return (
    <div
      className={styles.title__container}
    >
      <ElementTitle className={styles.title} id={titleId ?? ''}>
        {children}
      </ElementTitle>
      <button onClick={handleOnClickForCopy}>
        <IconHashtag />
      </button>
    </div>
  )
}
