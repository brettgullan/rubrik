import React from 'react'

// ----------------------------------------------------------------------------

import { useVariant } from '../../../hooks'
import { Box } from 'rebass'

// ----------------------------------------------------------------------------

const RichText = ({ children, text, sx, ...rest }) => {
  const styles = useVariant('content.richtext')
  return (
    <Box
      className="richtext"
      sx={{ ...styles, ...sx }}
      dangerouslySetInnerHTML={{ __html: children || text }}
      {...rest}
    />
  )
}

export default RichText
