import { PostComponent } from '@/layouts'
import styles from './carousel.module.css'
import { Controls, Element, Elements } from './components'
import { CarouselProvider } from './context/'

interface IProps {
  children: React.ReactNode
  carouselLength: number
  inlineStyles: React.CSSProperties
}

// Compound components are not available in astro :( https://discord.com/channels/830184174198718474/1019713903481081876/threads/1048405809538814044
export const Carousel = ({ children, carouselLength, inlineStyles }: IProps) => {
  return (
    <PostComponent>
      <PostComponent.Header>
        <h3>Midu Images</h3>
      </PostComponent.Header>
      <PostComponent.Content>
        <CarouselProvider {...{ carouselLength }}>
          <div
            style={
              {
                ...inlineStyles
              }
            }
            className={
              styles.carousel
            }
            role="slider"
          >
            <Controls />
            {children}
          </div>
        </CarouselProvider>
      </PostComponent.Content>
    </PostComponent>
  )
}

const CarouselHeader = () => {
  return (
    <header>

    </header>
  )
}

const CarouselFooter = () => {
  return (
    <header>

    </header>
  )
}

Carousel.Header = CarouselHeader
Carousel.Footer = CarouselFooter
Carousel.Element = Element
Carousel.Elements = Elements
