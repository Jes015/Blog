import { useCarouselLogic } from '../hooks'
import { carouselContext } from './carousel.context'

interface IProps {
  children: React.ReactNode
  carouselLength: number
}

export const CarouselProvider: React.FC<IProps> = ({ children, carouselLength }) => {
  const methods = useCarouselLogic(carouselLength)

  return (
        <carouselContext.Provider value={methods}>
            {children}
        </carouselContext.Provider>
  )
}
