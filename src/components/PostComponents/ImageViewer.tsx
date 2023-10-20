import { Carousel, Image } from '@/components/PostComponents'

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
                            <Image src={image} alt="carrousel image" width='15em' height='15em' lazy={index !== 0} />
                        </Carousel.Element>
                    ))
                }
            </Carousel.Elements>
        </Carousel>
  )
}
