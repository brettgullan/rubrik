import React, { cloneElement } from 'react'
import { Box, Flex, Link, Text } from 'rebass'
import { padding, position, size } from 'polished'

// ----------------------------------------------------------------------------

import Cloudinary from '../../providers/Cloudinary'
import LazyLoadProvider from '../../providers/LazySizes'

// ----------------------------------------------------------------------------

import Card from './card'
import Price from './price'
import { Standard as Image } from './images'
import { FauxBlockLink, Tile, TileLayer, Scrim } from '../structure'
import { LazyLoad } from '../media'

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

const withLazyLoad = (storyFn) => (
  <LazyLoadProvider>{storyFn()}</LazyLoadProvider>
)

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Cards/Card',
  decorators: [withCloudinary, withLazyLoad],
}

// ----------------------------------------------------------------------------

export const Default = () => {
  const image = {
    id: 'vfa76t7ycamsw0jheuvq',
    type: 'private',
  }
  return (
    <Card>
      <Tile>
        <Image image={image} />
        <TileLayer p={4} justifyContent="flex-end">
          <Text variant="trafalgar" fontWeight="regular" color="white.0">
            2020 Mercedes-AMG GT Review
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

// ----------------------------------------------------------------------------

export const BlockLink = () => {
  const image = {
    id: 'tezqdcioyfpngixkdhys',
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

// ----------------------------------------------------------------------------

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

// ----------------------------------------------------------------------------

const withIntrinsicRatio = (ratio) => ({
  position: 'relative',
  overflow: 'hidden',
  '&:before': {
    /* This will setup the aspect ratio of our screen */
    content: '""',
    display: 'block',
    /* content-box makes sure padding adds to declared height */
    boxSizing: 'content-box',
    width: '100%',
    height: 0,
    /* Vertical padding is based on parent element's width */
    /* So we want 9/16, converted to % as our vertical padding */
    paddingBottom: `${(1 / ratio) * 100}%`,
  },
})

const withFullBleed = () => ({
  display: 'block',
  ...position('absolute', 0),
  ...size('100%'),
  ...padding(0),
})

const blurUp = {
  '&.lazyload': {
    '-webkit-filter': 'blur(8px)',
    filter: 'blur(8px)',
    transition: 'filter 250ms, -webkit-filter 250ms',
  },
  '&.lazyloaded': {
    '-webkit-filter': 'blur(0)',
    filter: 'blur(0)',
  },
}

const fadeIn = {
  '&.lazyload': {
    opacity: 0,
    transition: 'opacity 400ms',
  },
  '&.lazyloaded': {
    opacity: 1,
  },
}

// ----------------------------------------------------------------------------

export const LazyLoadingFadeIn = () => {
  const image = {
    id: 'xebemoumy9losdljfk1x',
    type: 'private',
  }
  return (
    <Card>
      <Tile>
        <Scrim sx={withIntrinsicRatio(16 / 9)} bg="gray.0">
          <LazyLoad>
            <Image image={image} sx={{ ...withFullBleed(), ...fadeIn }} />
          </LazyLoad>
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

// ----------------------------------------------------------------------------

export const LazyLoadingBlurUp = () => {
  const image = {
    id: 'xebemoumy9losdljfk1x',
    type: 'private',
  }
  return (
    <Card>
      <Tile>
        <Scrim sx={withIntrinsicRatio(16 / 9)} bg="gray.0">
          <LazyLoad>
            <Image image={image} sx={{ ...withFullBleed(), ...blurUp }} />
          </LazyLoad>
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

// ----------------------------------------------------------------------------

export const LazyLoadingBlurUpPlugin = () => {
  const image = {
    id: 'xebemoumy9losdljfk1x',
    type: 'private',
  }

  const options = {
    srcset: Image.defaultProps.options.srcset,
    'data-lowsrc': Image.defaultProps.options.placeholder,
  }

  const blurUpPluginStyles = {
    '.ls-blur-up-is-loading, .lazyload:not([src])': {
      visibility: 'hidden',
    },
    '.ls-img, .ls-blur-up-img': {
      ...withFullBleed(),
      objectFit: 'cover',
    },
    '.ls-blur-up-img': {
      filter: 'blur(10px)',
      opacity: 1,
      transition: 'opacity 1000ms, filter 1500ms',
    },
    '.ls-blur-up-img.ls-inview.ls-original-loaded': {
      opacity: 0,
      filter: 'blur(5px)',
    },
  }

  return (
    <Card>
      <Tile>
        <Scrim
          sx={{ ...withIntrinsicRatio(16 / 9), ...blurUpPluginStyles }}
          bg="gray.0"
        >
          <LazyLoad>
            <Image className="ls-img" image={image} options={options} />
          </LazyLoad>
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
