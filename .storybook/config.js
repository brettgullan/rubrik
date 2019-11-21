import React from 'react'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addReadme } from 'storybook-readme'
import '@storybook/addon-console'

// ----------------------------------------------------------------------------

import { ThemeProvider } from '@rubrik/core'
import theme from '@rubrik/theme-default'

// ----------------------------------------------------------------------------

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
)
addDecorator(ThemeDecorator)

// ----------------------------------------------------------------------------

addDecorator(addReadme)

// ----------------------------------------------------------------------------

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'someDefault',
  },
})

addParameters({
  backgrounds: [
    { name: 'white', value: '#FFF' },
    { name: 'base', value: '#F5F5F5', default: true },
    { name: 'drive', value: '#00C2D3' },
    { name: 'grey', value: '#666' },
    { name: 'black', value: '#000' },
  ],
})

// ----------------------------------------------------------------------------

// automatically import all files ending in *.stories.js
// configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module)
configure(
  require.context('../packages', true, /^\.\/[^\/]+\/src\/.*stories\.js?$/),
  module
)
