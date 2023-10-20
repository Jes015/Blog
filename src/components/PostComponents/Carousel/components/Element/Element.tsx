import { useCarouselContext } from '../../hooks/useCarouselContext'
import styles from './element.module.css'

interface IProps {
  children: React.ReactNode
}

export const Element: React.FC<IProps> = ({ children }) => {
  const { actualElementIndex } = useCarouselContext()

  return (
        <div
            className={styles.element}
            role='tabpanel'
            style={{
              transform: `translateX(${-100 * actualElementIndex}%)`
            }}
        >
            {children}
        </div>
  )
}
