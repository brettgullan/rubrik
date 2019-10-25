import React, { Fragment } from 'react'
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

export const RangeStart = () => {
  return <Price rangeStart="$30,490" />
}

export const RangeEndOnly = () => {
  return (
    <Fragment>
      <Price rangeEnd="$42,990" />
      <Text mb={2} variant="greatPrimer">
        Expecting to see this message (only).
      </Text>
      <Text mb={3} variant="pica">
        If neither <strong>Price</strong> nor <strong>Range Start</strong>{' '}
        values are provided, Price component will display nothing (null).
      </Text>
      <Text variant="minion">
        Alternate display or validation strategies to be confirmed.
      </Text>
    </Fragment>
  )
}
