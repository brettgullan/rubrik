import React from 'react'

// ----------------------------------------------------------------------------

import { CloudinaryImage } from '../media'

// ----------------------------------------------------------------------------

export const Standard = ({ image, options, sx, ...rest }) => {
  return (
    <CloudinaryImage
      image={image}
      options={options}
      sx={{ display: 'block', width: '100%', ...sx }}
      {...rest}
    />
  )
}

Standard.defaultProps = {
  options: {
    srcset: {
      widths: [375, 480, 640, 728],
      aspect_ratio: 16 / 9,
      crop: 'fill',
      quality: 80,
    },
    placeholder: {
      width: 60,
      aspect_ratio: 16 / 9,
      crop: 'fill',
      quality: 30,
    },
  },
}
