import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

import Cloudinary from '../../../providers/Cloudinary'

// ----------------------------------------------------------------------------

import { Heading } from 'rebass'
import { CloudinaryImage } from '../../media'
import { Tile, TileLayer } from '.'
import { borderColor } from 'polished'

// ----------------------------------------------------------------------------

const withCloudinary = (storyFn) => (
  <Cloudinary
    options={{
      cloud_name: 'caradvice',
      private_cdn: true,
      secure_distribution: 'media.caradvice.com.au',
      secure: true,
    }}
  >
    {storyFn()}
  </Cloudinary>
)

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/Tile',
  decorators: [withKnobs, withCloudinary],
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
      <CloudinaryImage {...imgProps} />
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
