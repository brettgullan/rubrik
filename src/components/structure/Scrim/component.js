import React from 'react'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'

// ----------------------------------------------------------------------------

const Scrim = ({ variant, ...rest }) => (
  <Flex variant={`scrims.${variant}`} {...rest} />
)

Scrim.defaultProps = {
  variant: 'default',
}

export default Scrim
