import React from 'react'

// ----------------------------------------------------------------------------

import Slider from 'react-slick'
import styles from './styles'
import { Dots, NextArrow, PrevArrow } from './styled'

// ----------------------------------------------------------------------------

import convertToRebass from '../../../../../src/utils/convert-to-rebass'
const StyledSlider = convertToRebass(Slider)

// ----------------------------------------------------------------------------

const Carousel = ({ sx, ...rest}) => {
  return (
    <StyledSlider sx={{ ...styles, ...sx }} {...rest} slide="section" />
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
