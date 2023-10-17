import { Carousel } from '@/components'

interface IProps {
  images: string[]
}

export const ImageViewer: React.FC<IProps> = ({ images }) => {
  return (
        <Carousel
            carouselLength={images.length}
            inlineStyles={{
              maxHeight: '25em',
              height: '100%',
              overflow: 'hidden'
            }}
        >
            <Carousel.Elements>
                {
                    images.map((image, index) => (
                        <Carousel.Element key={index}>
                            <img src={image} alt="carrousel image" />
                        </Carousel.Element>
                    ))
                }
            </Carousel.Elements>
        </Carousel>
  )
}
