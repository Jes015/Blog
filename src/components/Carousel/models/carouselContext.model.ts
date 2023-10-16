export interface CarouselDefaultValues {
  setElementIndex: (index: number) => void
  nextElement: () => void
  previousElement: () => void
  length: number
  actualElementIndex: number
}
