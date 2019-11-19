import { mapObjIndexed } from 'ramda'
import { darken, tint } from 'polished'

// ----------------------------------------------------------------------------

import { colors } from '../..'

// ----------------------------------------------------------------------------

const alpha = {
  ...mapObjIndexed(
    (color, key) => ({
      color: key === 'subtle' ? darken(0.3, color) : colors.white[0],
      borderColor: color,
      bg: color,
      '&:hover': {
        ...(key !== 'subtle' && {
          borderColor: darken(0.1, color),
          backgroundColor: darken(0.1, color),
        }),
      },

      '&.reverse': {
        color: color,
        borderColor: key === 'subtle' ? darken(0.3, color) : colors.white[0],
        bg: key === 'subtle' ? darken(0.3, color) : colors.white[0],
        '&:hover': {
          ...(key !== 'subtle' && {
            borderColor: tint(0.85, color),
            backgroundColor: tint(0.85, color),
          }),
        },
      },
    }),
    colors.button
  ),
}

export default alpha
