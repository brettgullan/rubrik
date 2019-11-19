import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'
import { Text } from 'rebass'

// ----------------------------------------------------------------------------

import { colors } from '../../../../theme/src/storybook'

// ----------------------------------------------------------------------------

import Video from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Media/Video',
  component: Video,
  decorators: [withKnobs],

  parameters: {
    component: Video,
    componentSubtitle: 'Responsive HTML5 video player',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => (
  <Video
    url="https://www.youtube.com/watch?v=KWrK2xGH6uo"
    width={16}
    height={9}
  />
)
