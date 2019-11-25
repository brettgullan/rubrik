import baseTheme from 'gatsby-theme-docz/src/theme/index'
import { merge } from 'lodash/fp'

export default merge(baseTheme, {
  fonts: {
    body: "'Barlow', 'sans-serif'",
    heading: "'Barlow', 'sans-serif'",
  },
  colors: {
    header: {
      bg: 'tomato',
    },
  },
})
