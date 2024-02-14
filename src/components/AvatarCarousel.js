import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';

const responsive={
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 8,
      slidesToSlide:5,
      partialVisibilityGutter: 40
      
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 2,
      slidesToSlide:2,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 5,
      slidesToSlide:4,
      partialVisibilityGutter: 30
    }
  }
 

export default function AvatarCarousel({data}) {
  return (
< >
<Carousel 
  responsive={responsive}
  additionalTransfrom={0}
  arrows
  autoPlaySpeed={3000}
  centerMode={false}
  className=""
  containerClass=""
  dotListClass=""
  draggable
  focusOnSelect={false}
  infinite
  itemClass="px-0"
  keyBoardControl
  minimumTouchDrag={80}
  renderArrowsWhenDisabled={false}
  renderButtonGroupOutside={false}
  renderDotsOutside={false}
rewind={false}
  rewindWithAnimation={false}
  rtl={false}
  shouldResetAutoplay
  showDots={false}
  sliderClass=""
  swipeable
>
{data}
</Carousel>
</>
  )
}