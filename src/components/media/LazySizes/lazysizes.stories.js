import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import Cloudinary from '../../../providers/Cloudinary'
import CloudinaryImage from '../CloudinaryImage'
import CloudinaryPicture from '../CloudinaryPicture'

// ----------------------------------------------------------------------------

import LazySizesProvider from '../../../providers/LazySizes'
import LazySizes from '.'

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

const withLazySizes = (storyFn) => (
  <LazySizesProvider>{storyFn()}</LazySizesProvider>
)

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Media/LazySizes',
  component: LazySizes,
  decorators: [withKnobs, withCloudinary, withLazySizes],

  parameters: {
    component: LazySizes,
    componentSubtitle: 'Adds lazy loading support to Image/Picture components.',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  const props = {
    options: {
      src: {
        width: 600,
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

  return (
    <LazySizes>
      <CloudinaryImage {...props} />
    </LazySizes>
  )
}

// ----------------------------------------------------------------------------

export const Placeholder = () => {
  const props = {
    options: {
      src: {
        width: 1200,
        aspect_ratio: 3 / 2,
        crop: 'fill',
        quality: 80,
      },
      placeholder: {
        width: 60,
        aspect_ratio: 3 / 2,
        crop: 'fill',
        quality: 20,
      },
    },
    image: {
      id: 'qtrhwslrejnkzy3tyxey',
      type: 'private',
    },
  }

  return (
    <LazySizes>
      <CloudinaryImage display="block" mx="auto" width="100%" {...props} />
    </LazySizes>
  )
}

// ----------------------------------------------------------------------------

export const Picture = () => {
  const props = {
    options: {
      options: {
        crop: 'fill',
        quality: 80,
      },
      sources: [
        {
          srcset: {
            widths: [640, 720, 960, 1024],
            ratio: 3 / 2,
          },
          media: '(min-width: 640px) and (max-width: 1024px)',
        },
        {
          srcset: {
            widths: [1280, 1440, 1600, 1920, 2560],
            ratio: 16 / 9,
          },
          media: '(min-width: 1024px)',
        },
      ],
      src: {
        width: '640px',
        ratio: 5 / 6,
      },
      placeholder: {
        width: 60,
        aspect_ratio: 3 / 2,
        crop: 'fill',
        quality: 20,
      },
    },
    image: {
      id: 'qtrhwslrejnkzy3tyxey',
      type: 'private',
    },
  }

  return (
    <LazySizes>
      <CloudinaryPicture {...props} />
    </LazySizes>
  )
}
