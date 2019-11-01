import { tint } from 'polished'

// ----------------------------------------------------------------------------

import fontSizes from '../../fontsizes'

// ----------------------------------------------------------------------------

const forms = {
  /*
   *  FORM MESSAGE STYLES
   */
  messages: {
    sm: {
      fontSize: fontSizes.minion,
    },
    md: {
      fontSize: fontSizes.brevier,
    },
    lg: {
      fontSize: fontSizes.longPrimer,
    },

    error: {
      fontFamily: 'text',
      fontWeight: 'regular',
      lineHeight: 'snug',
      color: 'form.error',
    },
  },

  /*
   *  FORM INPUT STYLES
   */
  input: {
    base: {
      // Defaults
      fontWeight: 'regular',
      lineHeight: 'snug',
      color: 'text',
      border: '1px solid inherit',
      backgroundColor: 'white.0',
      borderRadius: 1,
      transition: 'all 250ms ease',

      '&::placeholder': {
        color: ({ colors }) => tint(0.6, colors.text),
      },

      // State
      '&.valid': {
        color: 'button.primary',
        backgroundColor: ({ colors }) => tint(0.95, colors.button.primary),
        border: '1px solid',

        '&:focus, &:active': {
          border: '1px solid inherit',
          boxShadow: [
            'rgb(106, 237, 97) 0px 0px 2px 1px',
            'rgb(177, 247, 160) 0px 0px 0px 3px',
          ].join(', '),
          outline: 'none',
        },

        /* Autocomplete styles in Chrome*/
        [[
          '&:-webkit-autofill',
          '&:-webkit-autofill:hover',
          '&:-webkit-autofill:focus',
        ].join(', ')]: {
          border: '1px solid inherit',
        },
      },

      '&.error': {
        color: 'form.error',
        backgroundColor: ({ colors }) => tint(0.95, colors.form.error),
        border: '1px solid',
        outline: 'none',

        '&::placeholder': {
          color: ({ colors }) => tint(0.5, colors.form.error),
        },

        '&:focus, &:active': {
          border: '1px solid inherit',
          boxShadow: [
            'rgb(244, 129, 116) 0px 0px 2px 1px',
            'rgb(251, 178, 174) 0px 0px 0px 3px',
          ].join(', '),
          outline: 'none',
        },

        /* Autocomplete styles in Chrome*/
        [[
          '&:-webkit-autofill',
          '&:-webkit-autofill:hover',
          '&:-webkit-autofill:focus',
        ].join(', ')]: {
          border: '1px solid inherit',
        },
      },
    },

    // Component Sizing
    sm: {
      fontSize: fontSizes.brevier,
      p: 3,
    },
    md: {
      fontSize: fontSizes.greatPrimer,
      p: 4,
    },
    lg: {
      fontSize: fontSizes.doublePica,
      fontWeight: 'light',
      py: 4,
      px: '24px',
    },
  },

  select: {
    borderRadius: 9999,
  },
  textarea: {},
  label: {},
  radio: {},
  checkbox: {},
}

// ----------------------------------------------------------------------------

export default forms
