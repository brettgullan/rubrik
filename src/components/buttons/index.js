import React from 'react'

import { Button } from 'rebass'

export const Alpha = ({ variant, ...rest }) => (
  <Button variant={`alpha.${variant}`} {...rest} />
)

Alpha.defaultProps = {
  as: 'a',
  variant: 'default',
}
