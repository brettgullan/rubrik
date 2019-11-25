import React from 'react'

import { ThemeProvider } from 'emotion-theming'
import theme from '@rubrik/theme-default'

// ----------------------------------------------------------------------------

/**
 * Display a Component under documentation, using its own theme (rather than the Docz theme).
 */
const ThemeWrapper = (props) => <ThemeProvider theme={theme} {...props} />

export default ThemeWrapper
