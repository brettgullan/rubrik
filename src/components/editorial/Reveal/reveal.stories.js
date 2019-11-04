import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

import Cloudinary from '../../../providers/Cloudinary'

// ----------------------------------------------------------------------------

import { CloudinaryImage } from '../../media'
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
  title: 'Design System|Elements/Editorial/Reveal',
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
