import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import { withResponsiveProvider } from '../../../../../src/utils/storybook'

// import ResponsiveImage from '.'
import { ResponsiveImage } from '@rubrik/media'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Media/ResponsiveImage',
  decorators: [withKnobs, withResponsiveProvider],
  component: ResponsiveImage,

  parameters: {
    component: ResponsiveImage,
    componentSubtitle: 'A responsive Provider-backed Image component',
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

  return <ResponsiveImage {...props} />
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

  return <ResponsiveImage {...props} />
}

// ----------------------------------------------------------------------------

export const Avatar = () => {
  const props = {
    options: {
      srcset: {
        widths: [120, 180, 240],
        resolutions: [1, 2],
        aspect_ratio: 1,
        crop: 'fill',
        quality: 80,
      },
    },
    image: {
      id: 'fvpbuzcay9nzbqq8wiax',
      type: 'private',
    },
  }

  return (
    <ResponsiveImage
      variant="avatar"
      display="block"
      mx="auto"
      width="30%"
      {...props}
    />
  )
}
