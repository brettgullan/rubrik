import React from 'react'
import cx from 'classnames'

import { useTheme } from '../../providers/theme'
import { get } from '@styled-system/css'

// ----------------------------------------------------------------------------

import { Button as Btn } from 'rebass'

// ----------------------------------------------------------------------------

export const Button = ({
  _type,
  size,
  color,
  reverse,
  className,
  sx,
  ...rest
}) => {
  const theme = useTheme()

  const sizeStyles = get(theme, `buttons.${size}`)
  const colorStyles = get(theme, `buttons.${_type}.${color}`)

  return (
    <Btn
      variant={`default`}
      className={cx(className, size, color, { reverse })}
      sx={{
        ...sizeStyles,
        ...colorStyles,
        ...sx,
      }}
      {...rest}
    />
  )
}

// ----------------------------------------------------------------------------

Button.defaultProps = {
  as: 'a',
  _type: 'alpha',
  size: 'md',
  color: 'primary',
  reverse: false,
}

export default Button
