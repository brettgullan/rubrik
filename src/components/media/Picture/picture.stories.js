import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

import { TokenBuilder } from 'responsive-configuration-builder'

// ----------------------------------------------------------------------------

import Picture from '.'

// ----------------------------------------------------------------------------

const template = 'https://picsum.photos/id/{id}/{width}/{height}'
const builder = TokenBuilder(template)

const spec = {
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
}

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Media/Picture',
  decorators: [withKnobs],
  component: Picture,

  parameters: {
    component: Picture,
    componentSubtitle: 'A responsive Picture component',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  const image = {
    id: 1018,
  }
  const props = builder(spec, image)

  return <Picture {...props} />
}
