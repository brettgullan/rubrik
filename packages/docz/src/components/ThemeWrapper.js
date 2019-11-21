import React from 'react'

import { ThemeProvider } from 'emotion-theming'
import theme from '@rubrik/theme-default'

// ----------------------------------------------------------------------------

const ThemeWrapper = (props) => <ThemeProvider theme={theme} {...props} />

export default ThemeWrapper
