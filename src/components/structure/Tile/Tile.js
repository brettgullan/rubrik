import React from 'react'
import { Flex } from 'rebass'

// ----------------------------------------------------------------------------

export default ({ sx, ...rest }) => (
  <Flex sx={{ position: 'relative', ...sx }} {...rest} />
)
