import css, { get } from '@styled-system/css'
import { __, map, merge } from 'ramda'
import { lighten, position, size, tint } from 'polished'

// breakpoint values
// any array length works with styled-system
const breakpoints = ['640px', '768px', '1024px', '1280px']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const sizes = {
  page: '1280px',
  article: '728px',
}

const space = [0, 2, 4, 8, 16, 32, 64]

// ----------------------------------------------------------------------------

const nd = [
  'rgba(0, 0, 0, 0.125)',
  'rgba(0, 0, 0, 0.25)',
  'rgba(0, 0, 0, 0.33)',
  'rgba(0, 0, 0, 0.5)',
  'rgba(0, 0, 0, 0.66)',
  'rgba(0, 0, 0, 0.75)',
  'rgba(0, 0, 0, 0.875)',
]

const colors = {
  transparent: 'transparent',
  inherit: 'inherit',
  current: 'currentColor',

  white: ['#FFFFFF', '#FCFCFC', '#F6F6F6', '#F0F0F0'],
  gray: ['#eee', '#ccc', '#999', '#666', '#4A4A4A', '#333'],
  black: ['#000000', '#121212', '#2A2A2A'],

  text: '#343C41',

  brand: {
    primary: '#00C2D3',
  },
  button: {
    primary: '#00C2D3',
    accent: '#F5A623',
    secondary: '#666',
    tertiary: '#CCC',
    subtle: '#EEE',
  },

  nd,

  social: {
    twitter: '#1da1f2',
    facebook: '#1471F6',
    instagram: '#FCAF45',
    google: '#DB4437',
    youtube: '#FF0000',
    email: '#9b9b9b',
  },
}

// ----------------------------------------------------------------------------

// const fontSizes = [12, 14, 16, 18, 20, 24, 30, 36, 48, 64]
const fontSizes = [
  12,
  13,
  14,
  15,
  16,
  18,
  20,
  21,
  22,
  24,
  26,
  28,
  32,
  36,
  40,
  44,
  50,
  52,
  56,
  60,
  64,
  72,
  76,
  78,
  96,
  116,
  124,
  140,
  156,
  192,
]
fontSizes.xs = fontSizes[0] // 12px
fontSizes.sm = fontSizes[2] // 14px
fontSizes.base = fontSizes[4] // 16px
fontSizes.lg = fontSizes[5] // 18px
fontSizes.xl = fontSizes[6] // 20px
fontSizes['2xl'] = fontSizes[9] // 24px
fontSizes['3xl'] = fontSizes[12] // 32px
fontSizes['4xl'] = fontSizes[13] // 36px
fontSizes['5xl'] = fontSizes[15] // 44px
fontSizes['6xl'] = fontSizes[20] // 64px

fontSizes['canon'] = ['32px', '52px']
fontSizes['trafalgar'] = ['24px', '36px']
fontSizes['paragon'] = ['22px', '28px']
fontSizes['doublePica'] = ['20px', '26px']
fontSizes['greatPrimer'] = ['18px', '21px']
fontSizes['bodyCopy'] = ['16px', '18px']
fontSizes['pica'] = ['16px', '18px']
fontSizes['longPrimer'] = ['15px', '15px']
fontSizes['brevier'] = ['14px', '14px']
fontSizes['minion'] = ['12px', '13px']

const fontWeights = {
  thin: 100,
  light: 300,
  regular: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900,
}

const lineHeights = [1, 1.25, 1.375, 1.5, 1.625, 2]
lineHeights.none = lineHeights[0]
lineHeights.tight = lineHeights[1]
lineHeights.snug = lineHeights[2]
lineHeights.normal = lineHeights[3]
lineHeights.relaxed = lineHeights[4]
lineHeights.loose = lineHeights[5]

const fonts = {
  title: [
    '"Roboto Slab"',
    'Georgia',
    'Cambria',
    '"Times New Roman"',
    'Times',
    'serif',
  ].join(', '),

  text: [
    '"Open Sans"',
    'Roboto',
    '"Helvetica Neue"',
    'Helvetica',
    '-apple-system',
    '"Noto Sans"',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Noto Color Emoji"',
  ].join(', '),
}

// ----------------------------------------------------------------------------

const radii = [0, 2, 4, 8, 16, 32, 64]

const shadows = {
  // default: '0 1px 2px 0 rgba(0, 0, 0, 0.2)',
  card: '0 2px 8px rgba(0, 0, 0, 0.15)',
}

// ----------------------------------------------------------------------------

const baseText = {
  color: 'text',
  textDecoration: 'none',
}

const text = map(merge(baseText), {
  atlas: {
    fontFamily: 'text',
    fontSize: ['96px', '192px'],
    lineHeight: ['104px', '208px'],
  },
  elephant: {
    fontFamily: 'text',
    fontSize: ['78px', '156px'],
    lineHeight: ['84px', '170px'],
  },
  imperial: {
    fontFamily: 'text',
    fontSize: ['64px', '124px'],
    lineHeight: ['72px', '136px'],
  },
  royal: {
    fontFamily: 'text',
    fontSize: ['52px', '94px'],
    lineHeight: ['60px', '104px'],
  },
  foolscap: {
    fontFamily: 'text',
    fontSize: ['40px', '72px'],
    lineHeight: ['44px', '80px'],
  },

  canon: {
    fontFamily: 'title',
    fontWeight: 'light',
    fontSize: ['32px', '52px'],
    lineHeight: ['36px', '56px'],
  },
  trafalgar: {
    fontFamily: 'title',
    fontWeight: 'light',
    fontSize: ['24px', '36px'],
    lineHeight: ['28px', '40px'],
  },
  paragon: {
    fontFamily: 'title',
    fontSize: ['22px', '28px'],
    lineHeight: ['26px', '32px'],
  },
  doublePica: {
    fontFamily: 'text',
    fontSize: ['20px', '26px'],
    lineHeight: ['24px', '30px'],
  },
  greatPrimer: {
    fontFamily: 'text',
    fontSize: ['18px', '21px'],
    lineHeight: ['22px', '24px'],
  },

  bodyCopy: {
    fontFamily: 'text',
    fontWeight: 'regular',
    fontSize: ['16px', '18px'],
    lineHeight: ['22px', '24px'],
  },

  pica: {
    fontFamily: 'text',
    fontSize: ['16px', '18px'],
    lineHeight: ['20px', '22px'],
  },
  longPrimer: {
    fontFamily: 'text',
    fontSize: ['15px', '15px'],
    lineHeight: ['18px', '20px'],
  },
  brevier: {
    fontFamily: 'text',
    fontSize: ['14px', '14px'],
    lineHeight: ['18px', '18px'],
  },
  minion: {
    fontFamily: 'text',
    fontWeight: 'light',
    fontSize: ['12px', '13px'],
    lineHeight: '16px',
    textTransform: 'uppercase',
  },
})

// ----------------------------------------------------------------------------

const buttonDefaults = {
  fontFamily: 'text',
  fontWeight: 'bold',
  transition: 'background-color 0.2s ease, border-color 0.2s ease',
  borderRadius: '128px',
}

const defaultButtons = map(merge(__, buttonDefaults), {
  xl: {
    borderStyle: 'solid',
    borderWidth: '3px',
    px: ['58px', '66px'],
    py: ['14px', '15px'],
    ...text.doublePica,
  },
  lg: {
    borderStyle: 'solid',
    borderWidth: '3px',
    px: ['42px', '50px'],
    py: ['7px', '10px'],
    ...text.greatPrimer,
  },
  md: {
    borderStyle: 'solid',
    borderWidth: '2px',
    px: ['32px', '36px'],
    py: ['3px', '4px'],
    ...text.bodyCopy,
  },
  sm: {
    borderStyle: 'solid',
    borderWidth: '2px',
    px: ['24px', '28px'],
    py: ['1px', '2px'],
    ...text.longPrimer,
  },
  xs: {
    borderStyle: 'solid',
    borderWidth: '1px',
    px: ['19px', '22px'],
    ...text.minion,
    textTransform: 'normal',
  },
})

const buttons = {
  default: defaultButtons,
}

// ----------------------------------------------------------------------------

const forms = {
  input: {
    // Component Sizing
    sm: {
      fontSize: fontSizes.brevier,
      fontWeight: 'regular',
      lineHeight: 'snug',
      p: 3,
    },
    md: {
      fontSize: fontSizes.greatPrimer,
      fontWeight: 'regular',
      lineHeight: 'snug',
      p: 4,
    },
    lg: {
      fontSize: fontSizes.doublePica,
      fontWeight: 'light',
      lineHeight: 'snug',
      py: 4,
      px: '24px',
    },

    // State
    default: {
      color: 'button.accent',
      border: '1px solid inherit',
      backgroundColor: 'white.0',
    },

    valid: {
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

    error: {
      color: 'button.accent',
      backgroundColor: ({ colors }) => tint(0.95, colors.button.accent),
      border: '1px solid',
      outline: 'none',

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

  select: {
    borderRadius: 9999,
  },
  textarea: {},
  label: {},
  radio: {},
  checkbox: {},
}

// ----------------------------------------------------------------------------

const variants = {
  card: {
    position: 'relative',
    bg: 'white.0',
    boxShadow: 'card',
    borderRadius: 2,
    overflow: 'hidden',
  },
  avatar: {
    borderRadius: '50%',
  },
  scrims: {
    default: {
      position: 'relative',
      width: '100%',
      '&:after': {
        content: '""',
        ...position('absolute', 0),
        ...size('100%'),
        backgroundImage: `linear-gradient(to top, ${nd[3]}, transparent 40%)`,
      },
    },
  },
  ...text,
}

// ----------------------------------------------------------------------------

export default {
  breakpoints,
  sizes,
  space,

  colors,

  fontSizes,
  fontWeights,
  lineHeights,
  fonts,

  radii,
  text,

  shadows,
  buttons,
  forms,
  variants,
}
