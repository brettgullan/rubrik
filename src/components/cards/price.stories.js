import React from 'react'
import { Box, Flex, Text } from 'rebass'

// ----------------------------------------------------------------------------

import Price from './price'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Cards/Price',
  component: Price,
}

// ----------------------------------------------------------------------------

export const Default = () => {
  return <Price price="$30,490" />
}

export const PriceWithType = () => {
  return <Price price="$65,490" type="MSRP" />
}

export const Range = () => {
  return <Price rangeStart="$30,490" rangeEnd="$42,990" />
}

export const RangeEndOnly = () => {
  return <Price rangeEnd="$42,990" />
}
