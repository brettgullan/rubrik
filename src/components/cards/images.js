import React, { Fragment } from 'react'

// ----------------------------------------------------------------------------

import { Box } from 'rebass'
import { CloudinaryImage } from '../media'

// ----------------------------------------------------------------------------

export const Standard = ({ image, scrim, ...rest }) => {
  const imageOptions = {
    srcset: {
      widths: [375, 480, 640, 728],
      aspect_ratio: 16 / 9,
      crop: 'fill',
      quality: 80,
    },
  }

  const img = (
    <CloudinaryImage
      sx={{ display: 'block', width: '100%' }}
      image={image}
      options={imageOptions}
      {...rest}
    />
  )

  return scrim ? (
    <Box variant={`scrims.${scrim}`} children={img} />
  ) : (
    <Fragment>{img}</Fragment>
  )
}
