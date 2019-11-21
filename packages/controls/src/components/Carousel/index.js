import React from 'react'

// ----------------------------------------------------------------------------

import Slider from 'react-slick'
import './slick.css'
// import styles from './styles'
import { Dots, NextArrow, PrevArrow } from './styled'
import { Box } from '@rubrik/core'

// ----------------------------------------------------------------------------

// import convertToRebass from '../../../../../src/utils/convert-to-rebass'
// const StyledSlider = convertToRebass(Slider)

// ----------------------------------------------------------------------------

const Carousel = (props) => {
  return (
    <Box>
      <Slider {...props} slide="section" />
    </Box>
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
