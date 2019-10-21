import React from 'react'
import { CloudinaryBuilder } from 'responsive-configuration-builder'

// ----------------------------------------------------------------------------

import { useCloudinary } from '../../../providers/Cloudinary'
import Image from '../Image'

// ----------------------------------------------------------------------------

const CloudinaryImage = ({ image, options, ...rest }) => {
  const cloudinary = useCloudinary()
  const builder = CloudinaryBuilder(cloudinary)

  const imgProps = builder(options, image)

  const props = {
    ...rest,
    ...imgProps,
  }

  return <Image {...props} />
}

export default CloudinaryImage
