import React from 'react'

// ----------------------------------------------------------------------------

import { useResponsiveBuilder } from '../../../providers/Responsive'
import Picture from '../Picture'

// ----------------------------------------------------------------------------

const ResponsivePicture = ({ image, options, ...rest }) => {
  const builder = useResponsiveBuilder()
  const picture = builder(options, image)

  return <Picture {...picture} {...rest} />
}

export default ResponsivePicture
