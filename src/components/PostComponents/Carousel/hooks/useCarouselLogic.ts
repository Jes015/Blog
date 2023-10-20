import { useState } from 'react'
import type { CarouselDefaultValues } from '../models'

const defaultValues = {
  actualElementIndex: 0
}

export const useCarouselLogic = (carouselLength: number): CarouselDefaultValues => {
  const [actualElementIndex, setActualIndexElement] = useState(defaultValues.actualElementIndex)

  const setElementIndex = (index: number) => {
    setActualIndexElement(index)
  }

  const nextElement = () => {
    if (actualElementIndex === carouselLength - 1) return
    setActualIndexElement(actualElementIndex + 1)
  }

  const previousElement = () => {
    if (actualElementIndex === 0) return
    setActualIndexElement(actualElementIndex - 1)
  }

  return { setElementIndex, nextElement, previousElement, length: carouselLength, actualElementIndex }
}
