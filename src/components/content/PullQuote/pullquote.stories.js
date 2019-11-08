import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import PullQuote from '../PullQuote'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Content/PullQuote',
  component: PullQuote,
  decorators: [withKnobs],

  parameters: {
    component: PullQuote,
    componentSubtitle: 'A PullQuote component',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  const props = {
    quote:
      'It took me years to understand that words are often as important as experience, because words make experience last.',
    attribution: 'William Morris',
  }
  return <PullQuote {...props} />
}
Primary.story = {
  name: 'Default',
}

// ----------------------------------------------------------------------------

export const NoAttribution = () => {
  const props = {
    quote:
      'It took me years to understand that words are often as important as experience, because words make experience last.',
  }
  return <PullQuote {...props} />
}

// ----------------------------------------------------------------------------

/**
 * Nested SX format
 * Address individual elements within the component using nested classname selectors.
 */
export const WithNestedOverrideStyles = () => {
  const props = {
    quote:
      'It took me years to understand that words are often as important as experience, because words make experience last.',
    attribution: 'William Morris',
  }
  const sx = {
    bg: 'white.0',
    '.quote': {
      color: 'brand.primary',
    },
    '.attribution': {
      fontStyle: 'italic',
    },
  }
  return <PullQuote {...props} sx={sx} />
}

// ----------------------------------------------------------------------------

/**
 * Alternate SX format
 * use sub-object style declarations for each component in the composition.
 */
export const WithObjectOverrideStyles = () => {
  const props = {
    quote:
      'It took me years to understand that words are often as important as experience, because words make experience last.',
    attribution: 'William Morris',
  }
  const sx = {
    bg: 'gray.2', // this should NOT be applied
    block: {
      bg: 'white.0',
    },
    quote: {
      color: 'brand.primary',
    },
    attribution: {
      fontStyle: 'italic',
    },
  }
  return <PullQuote {...props} sx={sx} />
}
