import React from 'react'
import PropTypes from 'prop-types'

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

CloudinaryImage.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
  }),
  options: PropTypes.object.isRequired,
}

export default CloudinaryImage
