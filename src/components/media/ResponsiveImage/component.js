import React from 'react'

// ----------------------------------------------------------------------------

import { useResponsiveBuilder } from '../../../providers/Responsive'
import Image from '../Image'

// ----------------------------------------------------------------------------

const ResponsiveImage = ({ image, options, ...rest }) => {
  const builder = useResponsiveBuilder()
  const imgProps = builder(options, image)

  const props = {
    ...rest,
    ...imgProps,
  }

  return <Image {...props} />
}

export default ResponsiveImage
