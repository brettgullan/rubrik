import React from 'react'
import { configure } from '@storybook/react'
import { addDecorator } from '@storybook/react'
import { withThemesProvider } from 'storybook-addon-emotion-theme'
import { ThemeProvider } from 'emotion-theming'

import theme from '../src/theme'

// automatically import all files ending in *.stories.js
configure(require.context('../src', true, /\.stories\.js$/), module)

// const themes = [theme]
//addDecorator(withThemesProvider(themes))

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)
addDecorator(ThemeDecorator)
