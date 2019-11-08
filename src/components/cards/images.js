import React from 'react'

// ----------------------------------------------------------------------------

import { useImageConfig } from '../../hooks'
import { ResponsiveImage } from '../media'

// ----------------------------------------------------------------------------

export const Standard = ({ image, sx, ...rest }) => {
  const imageOptions = useImageConfig('cards.default')

  return (
    <ResponsiveImage
      sx={{ display: 'block', width: '100%', bg: 'gray.0', ...sx }}
      image={image}
      options={imageOptions}
      {...rest}
    />
  )
}
