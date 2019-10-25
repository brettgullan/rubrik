import React, { cloneElement } from 'react'
import { Box, Flex, Text } from 'rebass'

// ----------------------------------------------------------------------------

import Cloudinary from '../../providers/Cloudinary'

// ----------------------------------------------------------------------------

import Card from './card'
import { Standard as Image } from './images'

// ----------------------------------------------------------------------------

const withCloudinary = (storyFn) => (
  <Cloudinary
    options={{
      cloud_name: 'caradvice',
      private_cdn: true,
      secure_distribution: 'media.caradvice.com.au',
      secure: true,
    }}
  >
    {storyFn()}
  </Cloudinary>
)

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Cards',
  decorators: [withCloudinary],
}

// ----------------------------------------------------------------------------

const Tile = ({ base, children, sx, ...rest }) => {
  return (
    <Flex sx={{ position: 'relative' }}>
      {base}
      <Flex
        sx={{
          position: 'absolute',
          top: 0,
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          ...sx,
        }}
        {...rest}
      >
        {children}
      </Flex>
    </Flex>
  )
}

export const Default = () => {
  const image = {
    id: 'xebemoumy9losdljfk1x',
    type: 'private',
  }
  return (
    <Card>
      <Tile base={<Image image={image} />} p={4} justifyContent="flex-end">
        <Text variant="trafalgar" fontWeight="regular" color="white.0">
          2020 Volkswagen Golf GTI Review
        </Text>
      </Tile>
      <Box>
        <Text variant="pica" p={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </Card>
  )
}
