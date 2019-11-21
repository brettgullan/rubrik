// ----------------------------------------------------------------------------

import fontSizes from '../../fontsizes'

// ----------------------------------------------------------------------------

const toggle = {
  base: {
    appearance: 'none',
    outline: 'none',
    position: 'relative',
    display: 'block',
    transition: '0.25s ease',

    borderRadius: '9999px',
    backgroundColor: '#bebebe',

    '&:after': {
      content: '""',
      position: 'absolute',
      zIndex: 1,
      borderRadius: '9999px',
      top: '50%',
      left: '50%',
      transition: '0.25s ease',

      backgroundColor: 'white.0',
      boxShadow: '1px 3px 3px 1px rgba(0, 0, 0, 0.1)',
      transform: 'translate(-100%, -50%)',
    },
    '&:checked': {
      backgroundColor: '#4fbe79',
      '&:after': {
        transform: 'translate(0, -50%)',
      },
    },
  },

  // Component Sizing
  sm: {
    width: '48px',
    height: '24px',
    '&:after': {
      height: '18px',
      width: '18px',
      ml: '-3px',
    },
    '&:checked': {
      '&:after': {
        ml: '3px',
      },
    },
  },

  md: {
    width: '64px',
    height: '32px',
    '&:after': {
      height: '24px',
      width: '24px',
      ml: '-4px',
    },
    '&:checked': {
      '&:after': {
        ml: '4px',
      },
    },
  },

  lg: {
    width: '120px',
    height: '60px',
    '&:after': {
      height: '50px',
      width: '50px',
      ml: '-5px',
    },
    '&:checked': {
      '&:after': {
        ml: '5px',
      },
    },
  },
}

export default toggle
