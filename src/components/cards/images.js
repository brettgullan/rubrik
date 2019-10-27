import React, { Fragment } from 'react'

// ----------------------------------------------------------------------------

import { CloudinaryImage } from '../media'

// ----------------------------------------------------------------------------

export const Standard = ({ image, ...rest }) => {
  const imageOptions = {
    srcset: {
      widths: [375, 480, 640, 728],
      aspect_ratio: 16 / 9,
      crop: 'fill',
      quality: 80,
    },
  }

  return (
    <CloudinaryImage
      sx={{ display: 'block', width: '100%' }}
      image={image}
      options={imageOptions}
      {...rest}
    />
  )
}
