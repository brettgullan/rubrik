import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

import { withResponsiveProvider } from '../../../../../src/utils/storybook'

// ----------------------------------------------------------------------------

import { Heading } from 'rebass'

import { ResponsiveImage } from '@rubrik/media/src/'
import Reveal from '.'

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
  decorators: [withKnobs, withResponsiveProvider],

  parameters: {
    component: Reveal,
    componentSubtitle: 'An image comparison component',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  const left = (
    <ResponsiveImage
      image={{ id: 'mgob456ukvk29dhmw4zn', type: 'private' }}
      options={imageOptions}
    />
  )
  const right = (
    <ResponsiveImage
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
