import React from 'react'
import { CloudinaryBuilder } from 'responsive-configuration-builder'

// ----------------------------------------------------------------------------

import { useCloudinary } from '../../../providers/Cloudinary'
import Picture from '../Picture'

// ----------------------------------------------------------------------------

const CloudinaryPicture = ({ image, options, ...rest }) => {
  const cloudinary = useCloudinary()
  const builder = CloudinaryBuilder(cloudinary)
  const picture = builder(options, image)

  return <Picture {...picture} {...rest} />
}

export default CloudinaryPicture
