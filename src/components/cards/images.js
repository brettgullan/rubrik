import React from 'react'

// ----------------------------------------------------------------------------

import { useImageConfig } from '../../hooks'
import { CloudinaryImage } from '../media'

// ----------------------------------------------------------------------------

export const Standard = ({ image, sx, ...rest }) => {
  const imageOptions = useImageConfig('cards.default')

  return (
    <CloudinaryImage
      sx={{ display: 'block', width: '100%', bg: 'gray.0', ...sx }}
      image={image}
      options={imageOptions}
      {...rest}
    />
  )
}
