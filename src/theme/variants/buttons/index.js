import { __, mapObjIndexed } from 'ramda'
import { darken, tint } from 'polished'

// ----------------------------------------------------------------------------

import colors from '../../colors'
import text from '../text'

// ----------------------------------------------------------------------------

const buttons = {
  // BUTTON DEFAULT STYLES
  // Applied as Button variant.
  default: {
    transition: 'background-color 0.2s ease, border-color 0.2s ease',
    borderRadius: '128px',
    borderStyle: 'solid',
    '&:focus': {
      outline: 'none',
    },
  },

  // BUTTON SIZE STYLES
  // These are mapped into the Button's sx prop.
  xl: {
    borderWidth: '3px',
    px: ['58px', '66px'],
    py: ['14px', '15px'],
    ...text.doublePica,
    fontFamily: 'text',
    fontWeight: 'bold',
  },
  lg: {
    borderWidth: '3px',
    px: ['42px', '50px'],
    py: ['7px', '10px'],
    ...text.greatPrimer,
    fontFamily: 'text',
    fontWeight: 'bold',
  },
  md: {
    borderWidth: '2px',
    px: ['32px', '36px'],
    py: ['3px', '4px'],
    ...text.bodyCopy,
    fontFamily: 'text',
    fontWeight: 'bold',
  },
  sm: {
    borderWidth: '2px',
    px: ['24px', '28px'],
    py: ['1px', '2px'],
    ...text.longPrimer,
    fontFamily: 'text',
    fontWeight: 'bold',
  },
  xs: {
    borderWidth: '1px',
    px: ['19px', '22px'],
    ...text.minion,
    fontFamily: 'text',
    fontWeight: 'bold',
    textTransform: 'normal',
  },

  // BUTTON COLOR STYLES
  // These are mapped into the Button's sx prop,
  // each object definition below, applies for a
  // specific Button 'type' ...
  alpha: {
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
  },
}

// ----------------------------------------------------------------------------

export default buttons
