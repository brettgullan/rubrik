import React from 'react'
import PropTypes from 'prop-types'

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

CloudinaryPicture.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
  }),
  options: PropTypes.object.isRequired,
}

export default CloudinaryPicture
