import React, { Component } from 'react'
import Slider from 'react-slick'

import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'
import { useTheme } from 'emotion-theming'

import { Box } from 'rebass'

// ----------------------------------------------------------------------------

// Import css files
import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// ----------------------------------------------------------------------------

class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }
    return (
      <Slider {...settings} slide="section">
        <Box sx={{ p: 5, textAlign: 'center' }}>
          <h3>1</h3>
        </Box>
        <Box sx={{ p: 5, textAlign: 'center' }}>
          <h3>2</h3>
        </Box>
        <Box sx={{ p: 5, textAlign: 'center' }}>
          <h3>3</h3>
        </Box>
        <Box sx={{ p: 5, textAlign: 'center' }}>
          <h3>4</h3>
        </Box>
        <Box sx={{ p: 5, textAlign: 'center' }}>
          <h3>5</h3>
        </Box>
        <Box sx={{ p: 5, textAlign: 'center' }}>
          <h3>6</h3>
        </Box>
      </Slider>
    )
  }
}

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/Carousel',
  decorators: [withKnobs],
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  return <SimpleSlider />
}
