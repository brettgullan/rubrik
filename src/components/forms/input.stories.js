import React from 'react'
import {
  withKnobs,
  number,
  optionsKnob as options,
  text,
} from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'
import { Input } from '.'
// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Forms/Input',
  decorators: [withKnobs],
}

const onChange = () => {}

const sizes = {
  Small: 'sm',
  Default: 'md',
  Large: 'lg',
}

// ----------------------------------------------------------------------------

export const Placeholder = () => {
  return <Input placeholder="This is an empty input field" />
}

export const Primary = () => {
  const size = options('Size', sizes, 'md', {
    display: 'select',
  })
  const fontFamily = options(
    'Font Family',
    { Text: 'text', Title: 'title' },
    'text',
    {
      display: 'select',
    }
  )
  const color = text('Color', 'button.accent')
  const borderRadius = number('Border Radius', 1)
  return (
    <Input
      size={size}
      color={color}
      sx={{
        borderRadius,
        fontFamily,
      }}
      onChange={onChange}
      value="This is an input field"
    />
  )
}
Primary.story = {
  name: 'Default',
}

export const Valid = () => {
  const size = options('Size', sizes, 'md', {
    display: 'select',
  })
  const fontFamily = options(
    'Font Family',
    { Text: 'text', Title: 'title' },
    'text',
    {
      display: 'select',
    }
  )
  const color = text('Valid Color', 'button.accent')
  const borderRadius = number('Border Radius', 1)
  return (
    <Input
      valid={true}
      size={size}
      validColor={color}
      sx={{
        borderRadius,
        fontFamily,
      }}
      onChange={onChange}
      value="This is a valid input field"
    />
  )
}

export const Error = () => {
  return (
    <Input
      error={true}
      onChange={onChange}
      value="This is an error input field"
      sx={{
        '&.error': {
          textTransform: 'uppercase',
        },
      }}
    />
  )
}
