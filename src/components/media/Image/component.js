import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

// ----------------------------------------------------------------------------

import { Image as Img } from 'rebass'

// ----------------------------------------------------------------------------

const Image = ({ className, ...rest }) => (
  <Img className={cx(className)} {...rest} />
)

// ----------------------------------------------------------------------------

Image.defaultProps = {
  className: null,
}

Image.propTypes = {
  src: PropTypes.string,
  srcSet: PropTypes.string,
  className: PropTypes.string,
}

// ----------------------------------------------------------------------------

export default Image
