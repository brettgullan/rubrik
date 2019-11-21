import React from 'react'

import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

import { Box } from '@rubrik/core'

// ----------------------------------------------------------------------------

import Carousel from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Controls/Carousel',
  decorators: [withKnobs],
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  return (
    <Carousel>
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
    </Carousel>
  )
}
