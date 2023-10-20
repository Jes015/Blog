import { NextIcon, PreviousIcon } from '@/components'
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
  const { nextElement, previousElement, actualElementIndex, length } = useCarouselContext()

  const handleOnClickRight = () => {
    nextElement()
  }

  const handleOnClickLeft = () => {
    previousElement()
  }

  return (
    <div className={styles.controlsSide}>
      {
        actualElementIndex !== 0 &&
        <div
          className={
            [
              styles['controlsSide__button-container'],
              styles['controlsSide__button-container--left']
            ].join(' ')
          }
        >
          <button
            onClick={handleOnClickLeft}
            className={styles.controlsSide__button}
          >
            <PreviousIcon
              className={styles['controlsSide__button-icon']}
            />
          </button>
        </div>
      }

      {
        actualElementIndex !== length - 1 &&
        <div
          className={
            [
              styles['controlsSide__button-container'],
              styles['controlsSide__button-container--right']
            ].join(' ')
          }
        >
          <button
            onClick={handleOnClickRight}
            className={styles.controlsSide__button}
          >
            <NextIcon
              className={styles['controlsSide__button-icon']}
            />
          </button>
        </div>
      }
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
