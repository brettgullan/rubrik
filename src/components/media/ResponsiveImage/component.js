import React from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------------

import { useResponsiveBuilder } from '../../../providers/Responsive'
import Image from '../Image'

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
    type: PropTypes.string,
  }),
  options: PropTypes.object.isRequired,
}

export default ResponsiveImage
