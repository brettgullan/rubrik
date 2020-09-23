import React from 'react'

// ----------------------------------------------------------------------------

import { Text } from 'rebass'
import { useVariant } from '@rubrik/core'

// ----------------------------------------------------------------------------

const RichText = ({ children, text, sx, ...rest }) => {
  const styles = useVariant('content.richtext')
  return (
    <Text
      className="richtext"
      sx={{ ...styles, ...sx }}
      dangerouslySetInnerHTML={{ __html: children || text }}
      {...rest}
    />
  )
}

export default RichText
