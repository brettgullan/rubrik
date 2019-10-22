import React from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'
import Image from '../Image'

// ----------------------------------------------------------------------------

const renderSources = (sources) =>
  sources.map((source, index) => {
    const { srcSet } = source
    return srcSet ? <source key={`sources-${index}`} {...source} /> : null
  })

// ----------------------------------------------------------------------------

const Picture = ({ sources, ...props }) =>
  sources ? (
    <Flex as="picture">
      {/* Note: deliberately omitting the old IE 9 video tags here. */}
      {renderSources(sources)}
      <Image display="block" width="100%" {...props} />
    </Flex>
  ) : (
    <Image {...props} />
  )

// ----------------------------------------------------------------------------

Picture.defaultProps = {
  className: null,
}

Picture.propTypes = {
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      'data-srcset': PropTypes.string,
      srcSet: PropTypes.string,
      media: PropTypes.string,
      type: PropTypes.string,
    })
  ),
  src: PropTypes.string,
  srcSet: PropTypes.string,
  className: PropTypes.string,
}

// ----------------------------------------------------------------------------

export default Picture
