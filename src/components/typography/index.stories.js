import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import {
  fontWeights,
  fontFamily,
  textTransforms,
  colors,
  defaultColor,
} from '../../theme/storybook'

// ----------------------------------------------------------------------------

import {
  BodyCopy,
  Brevier,
  Canon,
  DoublePica,
  GreatPrimer,
  LongPrimer,
  Minion,
  Paragon,
  Pica,
  Trafalgar,
  Atlas,
  Elephant,
  Imperial,
  Royal,
  Foolscap,
} from '../typography'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Typography',
  decorators: [withKnobs],
}

// ----------------------------------------------------------------------------

export const canon = () => (
  <Canon
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Canon>
)

export const trafalgar = () => (
  <Trafalgar
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Trafalgar>
)
trafalgar.story = {
  parameters: {
    component: Trafalgar,
    componentSubtitle: 'Article title or section header',
  },
}

export const paragon = () => (
  <Paragon
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Paragon>
)

export const doublePica = () => (
  <DoublePica
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </DoublePica>
)

export const greatPrimer = () => (
  <GreatPrimer
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </GreatPrimer>
)

// ----------------------------------------------------------------------------

export const bodyCopy = () => (
  <BodyCopy
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </BodyCopy>
)

// ----------------------------------------------------------------------------

export const pica = () => (
  <Pica
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Pica>
)

export const longPrimer = () => (
  <LongPrimer
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </LongPrimer>
)

export const minion = () => (
  <Minion
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </Minion>
)

export const brevier = () => (
  <Brevier
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum
  </Brevier>
)

// ----------------------------------------------------------------------------

export const atlas = () => (
  <Atlas
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Atlas>
)

export const elephant = () => (
  <Elephant
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Elephant>
)

export const imperial = () => (
  <Imperial
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Imperial>
)

export const royal = () => (
  <Royal
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Royal>
)

export const foolscap = () => (
  <Foolscap
    fontFamily={options('Font family', fontFamily, 'title', {
      display: 'select',
    })}
    fontWeight={options('Font weight', fontWeights, 'regular', {
      display: 'select',
    })}
    textTransform={options('Text Transform', textTransforms, 'none', {
      display: 'select',
    })}
    color={options('Color', colors, defaultColor, {
      display: 'select',
    })}
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </Foolscap>
)
