import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'
import { Flex, Text } from 'rebass'

// ----------------------------------------------------------------------------

import { colors } from '../../../../../theme/src/storybook'

// ----------------------------------------------------------------------------

import Split from '../Split'
import Stretch from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/Stretch',
  component: Stretch,
  decorators: [withKnobs],

  parameters: {
    component: Stretch,
    componentSubtitle: 'Simple Box component preset to flex grow.',
  },
}

// ----------------------------------------------------------------------------

export const Default = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })

  const txt = options('Text Color', colors, colors.White, {
    display: 'select',
  })

  return (
    <Flex flexDirection="Column" height="400px" bg={bg}>
      <Split>
        <Text variant="primer" color={txt} p={4}>
          Left
        </Text>
        <Text variant="primer" color={txt} p={4}>
          Right
        </Text>
      </Split>
      <Stretch
        bg={colors.Drive}
        p={4}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text color={txt} variant="paragon">
          This area stretches to fill the available space.
        </Text>
      </Stretch>
      <Text variant="primer" color={txt} p={4}>
        Bottom
      </Text>
    </Flex>
  )
}
