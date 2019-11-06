import React from 'react'

import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'

import { Flex } from 'rebass'
import { Stack } from '../../structure'

// ----------------------------------------------------------------------------

const useVariant = (path, dflt = null) => {
  const theme = useTheme()
  return get(theme, path, dflt)
}

// ----------------------------------------------------------------------------

const PullQuote = ({ quote, attribution, sx, ...rest }) => {
  const styles = useVariant('content.pullquote', {})
  const { block: sxBlock, quote: sxQuote, attribution: sxAttribution } = sx
  return (
    <Stack
      as="figure"
      className="pullquote"
      sx={{ ...styles.block, ...(sxBlock || sx) }}
      {...rest}
    >
      <Flex
        as="blockquote"
        className="quote"
        sx={{ ...styles.quote, ...(sxBlock && sxQuote) }}
      >
        {quote}
      </Flex>
      {attribution && (
        <Flex
          as="figcaption"
          className="attribution"
          sx={{ ...styles.attribution, ...(sxBlock && sxAttribution) }}
        >
          {attribution}
        </Flex>
      )}
    </Stack>
  )
}

export default PullQuote
