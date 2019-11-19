import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import { withResponsiveProvider } from '../../../../../src/utils/storybook'

// import ResponsivePicture from '.'
// In this instance, we need to import the package version
// of the Component under test, to ensure that the Provider context
// is correctly resolved.
import { ResponsivePicture } from '@rubrik/media'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Media/ResponsivePicture',
  decorators: [withKnobs, withResponsiveProvider],
  component: ResponsivePicture,

  parameters: {
    component: ResponsivePicture,
    componentSubtitle: 'A responsive Cloudinary-backed Picture component',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  const props = {
    options: {
      options: {
        crop: 'fill',
        quality: 80,
      },
      sources: [
        {
          srcset: {
            widths: [640, 720, 960],
            ratio: 3 / 2,
          },
          media: '(min-width: 640px) and (max-width: 1024px)',
        },
        {
          srcset: {
            widths: [1024, 1280, 1440, 1600, 1920, 2560],
            ratio: 16 / 9,
          },
          media: '(min-width: 1024px)',
        },
      ],
      src: {
        width: '320px',
        ratio: 5 / 6,
      },
    },
    image: {
      id: 'qtrhwslrejnkzy3tyxey',
      type: 'private',
    },
  }

  return <ResponsivePicture {...props} />
}
