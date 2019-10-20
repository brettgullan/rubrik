import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'

import theme from '.'

// ----------------------------------------------------------------------------

export default createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    background: ${theme.colors.white[3]};
    min-height: 100vh;
    width: 100%;

    margin-left: auto !important;
    margin-right: auto !important;

    @media (min-width: 640px) { max-width: 640px; }
    @media (min-width: 768px) { max-width: 768px; }
    @media (min-width: 1024px) { max-width: 1024px; }
    @media (min-width: 1280px) {  max-width: 1280px; }
  }

  #___gatsby,
  #gatsby-focus-wrapper {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
  }
`
