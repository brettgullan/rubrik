import React from 'react'

// ----------------------------------------------------------------------------

import Slider from 'react-slick'
import './slick.css'
import { Dots, NextArrow, PrevArrow } from './styled'

// ----------------------------------------------------------------------------

const Carousel = (props) => {
  return (
    <Slider {...props} slide="section" />
  )
}

Carousel.defaultProps = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: Dots,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
}

export default Carousel
