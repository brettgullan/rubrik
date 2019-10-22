import React, { cloneElement } from 'react'
import { compose, length, nth, pluck, sum, unnest } from 'ramda'
import { Flex } from 'rebass'

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

// Example right margin:
// calc((span / columns) - (columns - 1 * gutter / columns) + (span * gutter))
// calc(33.3333% - (2 * 20px / 3) + (1 * 20px))
const getRemainderMargin = (span, columns, gutter) =>
  `calc(${getPercentage(span, columns)} - ${getGutter(
    columns,
    gutter
  )} + (${span} * ${gutter}))`

// ----------------------------------------------------------------------------

const buildLayoutMatrix = (children, columns) => {
  const cols = parseInt(columns)
  const layoutMatrix = []

  let row = new Array()
  let itemSpan = 0

  children.forEach((child, index) => {
    const { span = 1 } = child.props
    if (itemSpan + span > cols) {
      layoutMatrix.push(row)
      row = new Array()
      row.push({
        span,
        props: child.props,
      })
      itemSpan = span
    } else if (itemSpan + span === cols) {
      row.push({
        span,
        props: child.props,
      })
      layoutMatrix.push(row)
      row = new Array()
      itemSpan = 0
    } else {
      row.push({
        span,
        props: child.props,
      })
      itemSpan = itemSpan + span

      // Edge-case -- push row to layoutMatrix on last item.
      if (isLast(index, children)) {
        layoutMatrix.push(row)
      }
    }
  })

  return layoutMatrix
}

const getRowSpan = compose(
  sum,
  pluck('span'),
  nth
)

const getRowCount = compose(
  length,
  nth
)

const getLayoutAsArray = unnest

const isLast = (index, array) => array.length === index + 1

// ----------------------------------------------------------------------------

const Grid = ({ columns, gutter, children, ...rest }) => {
  const matrix = buildLayoutMatrix(children, columns)

  const lastRowSpan = getRowSpan(-1, matrix)
  const lastRowCount = getRowCount(-1, matrix)

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      sx={{
        [`& > *:nth-last-child(-n + ${lastRowCount})`]: {
          mb: 0,
        },
      }}
    >
      {children.map((child, index) => {
        const { span = 1, mb } = child.props
        const props = {
          width: calculateItemWidths(span, columns, gutter),
          mb: mb || gutter,
          key: `gridItem-${index}`,
        }

        if (isLast(index, children)) {
          if (lastRowCount > 1 && lastRowSpan < columns) {
            props.mr = getRemainderMargin(
              columns - lastRowSpan,
              columns,
              gutter
            )
          }
        }

        return cloneElement(child, props)
      })}
    </Flex>
  )
}

export default Grid
