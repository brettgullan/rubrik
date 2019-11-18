import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

import Cloudinary from '../../../providers/Cloudinary'

// ----------------------------------------------------------------------------

import { Heading } from 'rebass'

import { CloudinaryImage } from '../../../../../src/components/media'
import Reveal from '.'

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

const imageOptions = {
  srcset: {
    widths: [320, 375, 414, 768, 960, 1024],
    resolutions: [1, 2],
    aspect_ratio: 16 / 9,
    crop: 'fill',
    quality: 80,
  },
}

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Controls/Reveal',
  component: Reveal,
  decorators: [withKnobs, withCloudinary],

  parameters: {
    component: Reveal,
    componentSubtitle: 'An image comparison component',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  const left = (
    <CloudinaryImage
      image={{ id: 'mgob456ukvk29dhmw4zn', type: 'private' }}
      options={imageOptions}
    />
  )
  const right = (
    <CloudinaryImage
      image={{ id: 'jcldohvcuz1wp39qq7is', type: 'private' }}
      options={imageOptions}
    />
  )
  return <Reveal left={left} right={right} />
}

// ----------------------------------------------------------------------------

export const RichContent = () => {
  const left = (
    <Heading
      variant="imperial"
      sx={{
        p: 6,
        bg: 'white.0',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgba(255, 152, 0, 0.5)',
        textTransform: 'uppercase',
      }}
    >
      Under
    </Heading>
  )
  const right = (
    <Heading
      variant="imperial"
      sx={{
        p: 6,
        bg: 'white.0',
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'rgba(14, 112, 215, 0.5)',
        textTransform: 'uppercase',
      }}
    >
      Over
    </Heading>
  )
  return <Reveal left={left} right={right} sx={{ p: 6, bg: 'white.0' }} />
}
