import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

import Cloudinary from '../../../providers/Cloudinary'

// ----------------------------------------------------------------------------

import CloudinaryImage from '.'

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
  title: 'Design System|Elements/Media/CloudinaryImage',
  decorators: [withKnobs, withCloudinary],
  component: CloudinaryImage,

  parameters: {
    component: CloudinaryImage,
    componentSubtitle: 'A responsive Cloudinary-backed Image component',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  const props = {
    options: {
      srcset: {
        width: 800,
        aspect_ratio: 3 / 2,
        crop: 'fill',
        quality: 80,
      },
    },
    image: {
      id: 'qtrhwslrejnkzy3tyxey',
      type: 'private',
    },
  }

  return <CloudinaryImage {...props} />
}

// ----------------------------------------------------------------------------

export const Responsive = () => {
  const props = {
    options: {
      srcset: {
        widths: [320, 375, 414, 768, 960, 1024],
        resolutions: [1, 2],
        aspect_ratio: 16 / 9,
        crop: 'fill',
        quality: 80,
      },
    },
    image: {
      id: 'fvpbuzcay9nzbqq8wiax',
      type: 'private',
    },
  }

  return <CloudinaryImage {...props} />
}
