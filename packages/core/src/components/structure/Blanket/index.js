import React from 'react'
import { mergeDeepRight } from 'ramda'
import { position } from 'polished'
import { Box } from 'rebass'

// ----------------------------------------------------------------------------

const baseStyles = {
  ...position('fixed', 0),
  width: '100vw',
  height: '100vh',
}

export const Blanket = ({ sx, ...props }) => (
  <Box sx={mergeDeepRight(baseStyles, sx)} {...props} />
)

export default Blanket
