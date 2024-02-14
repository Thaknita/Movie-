import React from 'react'

const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024
      },
      items: 5,
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
      items: 4,
      slidesToSlide:4,
      partialVisibilityGutter: 30
    }
  }

 
 export default function Carouselpopular() {
   return (
     <div>Carouselpopular</div>
   )
 }
 
  