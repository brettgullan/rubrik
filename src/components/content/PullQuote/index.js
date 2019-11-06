import React from 'react'

// ----------------------------------------------------------------------------

import { Flex } from 'rebass'
import { useVariant } from '../../../hooks'
import { Stack } from '../../structure'

// ----------------------------------------------------------------------------

const PullQuote = ({ quote, attribution, sx, ...rest }) => {
  const styles = useVariant('content.pullquote')
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
