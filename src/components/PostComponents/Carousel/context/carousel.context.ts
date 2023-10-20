import { createContext } from 'react'
import type { CarouselDefaultValues } from '../models'

const defaultValue: CarouselDefaultValues = {
  previousElement: () => {},
  setElementIndex: (index: number) => {},
  nextElement: () => {},
  length: 0,
  actualElementIndex: 0
}

export const carouselContext = createContext<CarouselDefaultValues>(defaultValue)
