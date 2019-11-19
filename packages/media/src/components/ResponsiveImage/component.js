import React from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------------

import { Image } from '@rubrik/core'
import { useResponsiveBuilder } from '../../providers'

// ----------------------------------------------------------------------------

const ResponsiveImage = ({ image, options, ...rest }) => {
  const builder = useResponsiveBuilder()
  const imgProps = builder(options, image)

  const props = {
    ...rest,
    ...imgProps,
  }

  return <Image {...props} />
}

ResponsiveImage.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  options: PropTypes.object.isRequired,
}

export default ResponsiveImage
