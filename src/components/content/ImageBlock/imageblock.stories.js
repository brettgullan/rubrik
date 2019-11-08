import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import { withResponsiveProvider } from '../../../utils/storybook'

import { Flex } from 'rebass'
import ImageBlock from '../ImageBlock'
import { Image } from '../../media'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Content/ImageBlock',
  component: ImageBlock,
  decorators: [withKnobs, withResponsiveProvider],

  parameters: {
    component: ImageBlock,
    componentSubtitle: 'An ImageBlock component',
  },
}

// ----------------------------------------------------------------------------

export const Primary = () => {
  const image = {
    id: 'cbvs1rgwbynsyd2p0lwp',
    type: 'private',
  }
  const caption =
    'It took me years to understand that words are often as important as experience, because words make experience last.'

  return <ImageBlock image={image} caption={caption} />
}
Primary.story = {
  name: 'Default',
}

// ----------------------------------------------------------------------------

export const WithChildAsFunction = () => {
  const image = {
    id: 'https://picsum.photos/id/235/1280/720',
  }
  const caption =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  return (
    <Flex maxWidth="article" mx="auto">
      <ImageBlock image={image} caption={caption}>
        {({ image }) => <Image src={image.id} />}
      </ImageBlock>
    </Flex>
  )
}

// ----------------------------------------------------------------------------

export const WithNegativeMargins = () => {
  const image = {
    id: 'yhvwb7xez1pvkzp1byqw',
    type: 'private',
  }
  const caption =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

  return (
    <Flex maxWidth="article" mx="auto" bg="gray.0" py={6}>
      <ImageBlock image={image} caption={caption} mx={[0, 0, -4]} />
    </Flex>
  )
}
