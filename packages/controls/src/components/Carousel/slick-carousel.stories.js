import React from 'react'

import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

import { Box } from '@rubrik/core'

// ----------------------------------------------------------------------------

import Carousel from '.'
import { Dots, NextArrow, PrevArrow } from './styled'

// ----------------------------------------------------------------------------

import { withResponsiveProvider } from '../../../../../src/utils/storybook'
import { ResponsiveImage } from '@rubrik/media'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Controls/Carousel',
  decorators: [withKnobs, withResponsiveProvider],
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

// ----------------------------------------------------------------------------

export const Images = () => {
  const options = {
    srcset: {
      widths: [320, 375, 414, 768, 960, 1024],
      resolutions: [1, 2],
      aspect_ratio: 16 / 9,
      crop: 'fill',
      quality: 80,
    },
  }

  const images = [
    'rrnsor6xqwykzrd8y7ys',
    'vnffeis4zprbcheahwl9',
    'hhbhe6gttutbpe71telz',
    'vno2epkefbracajlkzcz',
    'lufvtit4p7pmbvoxdqjv',
    'fgqmc8zopn6zvphvftfe',
  ].map((id) => ({ id, type: 'private' }))

  return (
    <Carousel>
      {images.map((image, index) => {
        return (
          <ResponsiveImage
            key={`slide-${index}`}
            image={image}
            options={options}
          />
        )
      })}
    </Carousel>
  )
}
