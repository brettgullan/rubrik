import React from 'react'
import { Flex } from 'rebass'
import { position, size } from 'polished'

// ----------------------------------------------------------------------------

export default ({ sx, ...rest }) => (
  <Flex
    sx={{
      ...position('absolute', 0),
      ...size('100%'),
      flexDirection: 'column',
      ...sx,
    }}
    {...rest}
  />
)
