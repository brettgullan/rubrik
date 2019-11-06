import React from 'react'

import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'

import { Box } from 'rebass'

// ----------------------------------------------------------------------------

const useVariant = (path, dflt = null) => {
  const theme = useTheme()
  return get(theme, path, dflt)
}

// ----------------------------------------------------------------------------

const RichText = ({ children, text, sx, ...rest }) => {
  const styles = useVariant('content.richtext', {})
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
