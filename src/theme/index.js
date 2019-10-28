import { map, merge } from 'ramda'

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

  text: '#141414',

  // nested objects work as well
  brand: {
    primary: '#00C2D3',
  },

  nd,

  social: {
    twitter: '#1da1f2',
    facebook: '#3b5998',
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
      '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
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
  variants,
}
