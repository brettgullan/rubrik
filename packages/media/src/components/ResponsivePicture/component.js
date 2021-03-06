import React from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------------

import { Picture } from '@rubrik/core'
import { useResponsiveBuilder } from '../../providers'

// ----------------------------------------------------------------------------

const ResponsivePicture = ({ image, options, ...rest }) => {
  const builder = useResponsiveBuilder()
  const picture = builder(options, image)

  return <Picture {...picture} {...rest} />
}

ResponsivePicture.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.object.isRequired,
}

export default ResponsivePicture
