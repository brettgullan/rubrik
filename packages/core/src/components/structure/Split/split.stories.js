import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'
import { Text } from 'rebass'

// ----------------------------------------------------------------------------

import { colors } from '../../../../../theme/src/storybook'

// ----------------------------------------------------------------------------

import Split from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Structure/Split',
  component: Split,
  decorators: [withKnobs],

  parameters: {
    component: Split,
    componentSubtitle: 'Layout component that “splits” its children.',
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
    <Split bg={bg}>
      <Text variant="paragon" color={txt} p={4}>
        Left
      </Text>
      <Text variant="paragon" color={txt} p={4}>
        Right
      </Text>
    </Split>
  )
}

// ----------------------------------------------------------------------------

export const Balanced = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })

  const txt = options('Text Color', colors, colors.White, {
    display: 'select',
  })

  return (
    <Split bg={bg}>
      <Text variant="paragon" color={txt} p={4} mx="auto" maxWidth="50%">
        Left
      </Text>
      <Text variant="paragon" color={txt} p={4} mx="auto" maxWidth="50%">
        Right
      </Text>
    </Split>
  )
}

// ----------------------------------------------------------------------------

export const Reversed = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })

  const txt = options('Text Color', colors, colors.White, {
    display: 'select',
  })

  return (
    <Split flexDirection="row-reverse" bg={bg}>
      <Text variant="paragon" color={txt} p={4}>
        Left
      </Text>
      <Text variant="paragon" color={txt} p={4}>
        Right
      </Text>
    </Split>
  )
}

// ----------------------------------------------------------------------------

export const Triple = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })

  const txt = options('Text Color', colors, colors.White, {
    display: 'select',
  })

  return (
    <Split bg={bg}>
      <Text variant="paragon" color={txt} p={4}>
        Left
      </Text>
      <Text variant="paragon" color={txt} p={4}>
        Centre
      </Text>
      <Text variant="paragon" color={txt} p={4}>
        Right
      </Text>
    </Split>
  )
}

// ----------------------------------------------------------------------------

export const Vertical = () => {
  const bg = options('Background Color', colors, colors.Grey, {
    display: 'select',
  })

  const txt = options('Text Color', colors, colors.White, {
    display: 'select',
  })

  return (
    <Split flexDirection="column" height="100vh" bg={bg}>
      <Text variant="paragon" color={txt} p={4} mx="auto" maxWidth="50%">
        Left
      </Text>
      <Text variant="paragon" color={txt} p={4} mx="auto" maxWidth="50%">
        Right
      </Text>
    </Split>
  )
}
