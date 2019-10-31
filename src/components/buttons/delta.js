import React from 'react'
import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'
import { mix } from 'polished'

// ----------------------------------------------------------------------------

import { Button } from 'rebass'

// ----------------------------------------------------------------------------

export const Delta = ({ size, color, sx, ...rest }) => {
  const theme = useTheme()
  const colorValue = get(theme, `colors.button.${color}`)

  const styles = {
    color: `white.0`,
    borderColor: `button.${color}`,
    backgroundColor: 'nd.4',
    ...(color !== 'subtle' && {
      '&:hover': {
        backgroundColor: mix(0.85, get(theme, `colors.nd.4`), colorValue),
      },
    }),
  }

  return (
    <Button variant={`default.${size}`} sx={{ ...styles, ...sx }} {...rest} />
  )
}

// ----------------------------------------------------------------------------

Delta.defaultProps = {
  as: 'a',
  size: 'md',
  color: 'primary',
}

export default Delta
