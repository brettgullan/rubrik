import React, { cloneElement } from 'react'
import { Box, Flex } from 'rebass'

// ----------------------------------------------------------------------------

const getPercentage = (span, cols) => `${(span / cols) * 100}%`

const getGutter = (cols, gutter) =>
  cols === 1 ? `0px` : `(${cols - 1} * ${gutter} / ${cols})`

const getItemGutter = (span, cols, gutter) =>
  span === 1 ? `0px` : `(${span - 1} * ${gutter} / ${cols})`

const calculateItemWidths = (span, columns, gutter) =>
  `calc(${getPercentage(span, columns)} - ${getGutter(
    columns,
    gutter
  )} + ${getItemGutter(span, columns, gutter)})`

const getRemainingSpans = (spans, cols) => {
  const remainder = spans % cols
  return remainder ? cols - remainder : 0
}

// ----------------------------------------------------------------------------

const Grid = ({ columns, gutter, children, ...rest }) => {
  let spanCount = 0
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      sx={{
        [`& > *:nth-last-child(-n + ${columns})`]: {
          mb: 0,
        },
      }}
    >
      {children.map((child) => {
        const { span = 1 } = child.props
        spanCount += span
        const props = {
          width: calculateItemWidths(span, columns, gutter),
          mb: gutter,
        }
        return cloneElement(child, props)
      })}
      {getRemainingSpans(spanCount, columns) ? (
        <Box
          width={calculateItemWidths(
            getRemainingSpans(spanCount, columns),
            columns,
            gutter
          )}
        >
          Span Count: {spanCount}
        </Box>
      ) : null}
    </Flex>
  )
}

export default Grid
