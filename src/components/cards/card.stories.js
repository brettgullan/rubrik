import React, { cloneElement } from 'react'
import { Box, Flex, Link, Text } from 'rebass'

// ----------------------------------------------------------------------------

import Cloudinary from '../../providers/Cloudinary'

// ----------------------------------------------------------------------------

import Card from './card'
import Price from './price'
import { FauxBlockLink } from '../structure'
import { Standard as Image } from './images'
import { Tile, TileLayer, Scrim } from '../structure'

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

export const Default = () => {
  const image = {
    id: 'xebemoumy9losdljfk1x',
    type: 'private',
  }
  return (
    <Card>
      <Tile>
        <Image image={image} />
        <TileLayer p={4} justifyContent="flex-end">
          <Text variant="trafalgar" fontWeight="regular" color="white.0">
            2020 Volkswagen Golf GTI Review
          </Text>
        </TileLayer>
      </Tile>
      <Box p={4}>
        <Text variant="pica" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Price price="$30,490" />
      </Box>
    </Card>
  )
}

export const BlockLink = () => {
  const image = {
    id: 'xebemoumy9losdljfk1x',
    type: 'private',
  }
  return (
    <FauxBlockLink link="/this/is/a/link">
      <Card>
        <Tile>
          <Image image={image} />
          <TileLayer p={4} justifyContent="flex-end">
            <Text variant="trafalgar" fontWeight="regular" color="white.0">
              2020 Volkswagen Golf GTI Review
            </Text>
          </TileLayer>
        </Tile>
        <Box p={4}>
          <Text variant="pica" mb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
          <Link display="block" href="/this/is/clickable" variant="pica" mb={4}>
            This should be a clickable link, separate to the rest of this card.
          </Link>
          <Price price="$30,490" />
        </Box>
      </Card>
    </FauxBlockLink>
  )
}

export const WithScrim = () => {
  const image = {
    id: 'xebemoumy9losdljfk1x',
    type: 'private',
  }
  return (
    <Card>
      <Tile>
        <Scrim>
          <Image image={image} />
        </Scrim>
        <TileLayer p={4} justifyContent="flex-end">
          <Text variant="trafalgar" fontWeight="regular" color="white.0">
            2020 Volkswagen Golf GTI Review
          </Text>
        </TileLayer>
      </Tile>
      <Box p={4}>
        <Text variant="pica" mb={4}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Price rangeStart="$30,490" rangeEnd="$42,990" type="MSRP" />
      </Box>
    </Card>
  )
}
