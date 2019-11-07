import React from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------------

import { useResponsiveBuilder } from '../../../providers/Responsive'
import Picture from '../Picture'

// ----------------------------------------------------------------------------

const ResponsivePicture = ({ image, options, ...rest }) => {
  const builder = useResponsiveBuilder()
  const picture = builder(options, image)

  return <Picture {...picture} {...rest} />
}

ResponsivePicture.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
  }),
  options: PropTypes.object.isRequired,
}

export default ResponsivePicture
