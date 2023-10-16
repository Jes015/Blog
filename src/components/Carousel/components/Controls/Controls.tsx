import { useCarouselContext } from '../../hooks/useCarouselContext'
import styles from './controls.module.css'

export const Controls = () => {
  return (
    <div
      className={styles.controls}
      role="navigation"
    >
      <ControlsSide />
      <ControlsBottom />
    </div>
  )
}

const ControlsSide = () => {
  const { nextElement, previousElement } = useCarouselContext()

  const handleOnClickRight = () => {
    nextElement()
  }

  const handleOnClickLeft = () => {
    previousElement()
  }

  return (
    <div className={styles.controlsSide}>
      <button onClick={handleOnClickLeft} className={styles.controlsSide__button}>
        {'<'}
      </button>
      <button onClick={handleOnClickRight} className={styles.controlsSide__button}>
        {'>'}
      </button>
    </div>
  )
}

const ControlsBottom = () => {
  const { setElementIndex, length, actualElementIndex } = useCarouselContext()

  const handleOnClick = (buttonIndex: number) => () => {
    setElementIndex(buttonIndex)
  }

  return (
    <div className={styles.controlsBottom}>
      {
        Array(length).fill(0).map((_, index) => (
          <button
            key={index}
            role='tab'
            onClick={handleOnClick(index)}
            className={
              [
                styles.controlsBottom__button,
                actualElementIndex === index && styles['controlsBottom__button--selected']
              ].join(' ')
            }
          />
        ))
      }
    </div>
  )
}
