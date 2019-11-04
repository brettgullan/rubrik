import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'
import { Text } from 'rebass'

// ----------------------------------------------------------------------------

import { colors } from '../../../theme/storybook'

// ----------------------------------------------------------------------------

import Tweet from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Editorial/Twitter',
  component: Tweet,
  decorators: [withKnobs],

  parameters: {
    component: Tweet,
    componentSubtitle: 'An embedded Tweet',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => <Tweet tweetId="933354946111705097" />
export const WithMedia = () => <Tweet tweetId="1083592734038929408" />
