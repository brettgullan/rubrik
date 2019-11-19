import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

import { withResponsiveProvider } from '../../../../../../src/utils/storybook'

// ----------------------------------------------------------------------------

import { Heading } from 'rebass'
import { ResponsiveImage } from '../../../../../media/src'
import { Tile, TileLayer } from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/Tile',
  decorators: [withKnobs, withResponsiveProvider],
  component: Tile,

  parameters: {
    component: Tile,
    componentSubtitle:
      'A declarative convenience for creating layered content.',
  },
}

export const Primary = () => {
  return (
    <Tile justifyContent="center" alignItems="center">
      <Heading
        variant="imperial"
        sx={{
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'rgba(255, 152, 0, 0.5)',
          textTransform: 'uppercase',
        }}
      >
        Under
      </Heading>
      <TileLayer justifyContent="center" alignItems="center">
        <Heading
          variant="imperial"
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'rgba(14, 112, 215, 0.5)',
            textTransform: 'uppercase',
          }}
        >
          Over
        </Heading>
      </TileLayer>
    </Tile>
  )
}

export const ImageOverlay = () => {
  const imgProps = {
    options: {
      srcset: {
        width: 800,
        aspect_ratio: 3 / 2,
        crop: 'fill',
        quality: 80,
      },
    },
    image: {
      id: 'lmo9pvxq289wvvhs9anp',
      type: 'private',
    },
  }

  return (
    <Tile>
      <ResponsiveImage
        sx={{ display: 'block', width: '100%', maxWidth: 'none' }}
        {...imgProps}
      />
      <TileLayer justifyContent="center" alignItems="center">
        <Heading
          variant="canon"
          fontWeight="bold"
          textAlign="center"
          color="white.0"
        >
          This is “Tiled” text
        </Heading>
      </TileLayer>
    </Tile>
  )
}
