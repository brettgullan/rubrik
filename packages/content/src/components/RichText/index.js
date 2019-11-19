import React from 'react'

// ----------------------------------------------------------------------------

import { Box } from 'rebass'
import { useVariant } from '@rubrik/core'

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
