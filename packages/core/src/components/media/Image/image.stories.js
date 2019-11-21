import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

import { TokenBuilder } from 'responsive-configuration-builder'

// ----------------------------------------------------------------------------

import Image from '.'

// ----------------------------------------------------------------------------

const template = 'https://picsum.photos/id/{id}/{width}/{height}'
const builder = TokenBuilder(template)

const spec = {
  srcset: {
    widths: [320, 480, 640],
    ratio: 16 / 9,
  },
}

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Media/Image',
  decorators: [withKnobs],
  component: Image,

  parameters: {
    component: Image,
    componentSubtitle: 'An Image component',
  },
}

// ----------------------------------------------------------------------------

export const Default = () => (
  <Image src="https://picsum.photos/id/1015/320/180" />
)

// ----------------------------------------------------------------------------

export const Responsive = () => {
  const image = {
    id: 1018,
  }
  const { srcset } = builder(spec, image)

  return <Image srcset={srcset} />
}

// ----------------------------------------------------------------------------

export const Avatar = () => (
  <Image src="https://picsum.photos/id/1015/180/180" variant="avatar" />
)
