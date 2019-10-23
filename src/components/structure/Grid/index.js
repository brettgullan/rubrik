import React, { cloneElement } from 'react'
import { compose, curry, length, nth, pluck, sum, unnest } from 'ramda'
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

const gridItemBuilderFactory = (columns, gutter) => (
  { span = 1, mb },
  index
) => {}

// ----------------------------------------------------------------------------

const buildLayoutMatrix = (children, columns) => {
  const cols = parseInt(columns)
  const layoutMatrix = []

  let row = new Array()
  let itemSpan = 0

  children.forEach(({ props }, index) => {
    const { span = 1 } = props
    if (itemSpan + span > cols) {
      layoutMatrix.push(row)
      row = new Array()
      row.push({
        span,
        props,
      })
      itemSpan = span
    } else if (itemSpan + span === cols) {
      row.push({
        span,
        props,
      })
      layoutMatrix.push(row)
      row = new Array()
      itemSpan = 0
    } else {
      row.push({
        span,
        props,
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

// -----------------------------------------------------------------

const mapTransducer = (f) => (step) => (a, c) => step(a, f(c))

const filterTransducer = (predicate) => (step) => (a, c) =>
  predicate(c) ? step(a, c) : a

const doubleGateTransducer = (p, f) => (step) => (a, c) =>
  p(c) ? step(a, f(c)) : a

const dropTransducer = (f) => (step) => (a, c) => {
  const result = f(c)
  return result ? step(a, result) : a
}

// -----------------------------------------------------------------

const matrixLayoutTransformer = (cols, totalItems) => {
  let count = 0
  let colSpan = 0
  let row = new Array()

  return (item) => {
    const { span } = item
    ++count

    if (colSpan + span > cols) {
      const result = row
      row = [item]
      colSpan = span
      return row
    }
    if (colSpan + span === cols) {
      row.push(item)
      const result = row
      row = new Array()
      colSpan = 0
      return result
    }

    row.push(item)
    colSpan = colSpan + span

    // Edge-case -- return row if last item.
    if (count === totalItems) return row

    return undefined
  }
}

// -----------------------------------------------------------------

const calculatePercentage = (span, cols) => `${(span / cols) * 100}%`

const calculateGutter = (cols, gutter) =>
  cols === 1 ? `0px` : `(${cols - 1} * ${gutter} / ${cols})`

const calculateItemGutter = (span, cols, gutter) =>
  span === 1 ? `0px` : `(${span - 1} * ${gutter} / ${cols})`

const calculateItemWidth = (span, columns, gutter) =>
  `calc(${calculatePercentage(span, columns)} - ${calculateGutter(
    columns,
    gutter
  )} + ${calculateItemGutter(span, columns, gutter)})`

const calculateRemainderMargin = (columns, gutter, span) =>
  `calc(${calculatePercentage(span, columns)} - ${calculateGutter(
    columns,
    gutter
  )} + (${span} * ${gutter}))`

// -----------------------------------------------------------------

/**
 * Calculate matrix item width, margin props.
 */
const matrixItemTransformer = (cols, gutter) => (item) => {
  const { span = 1, mb } = item
  const width = calculateItemWidth(span, cols, gutter)
  return merge(item, { span, width, mb: mb || gutter })
}

// -----------------------------------------------------------------

/**
 * Determine whether a matrix `row` has empty columns and, if so,
 * calculate margin and assign to last item in row.
 * But only if there is more than one item in the row!
 */
const matrixRowBalanceTransformer = (cols, gutter) => (item) => {
  const remaining =
    cols -
    compose(
      sum,
      pluck('span')
    )(item)
  if (remaining && item.length > 1) {
    const marginRight = calculateRemainderMargin(cols, gutter, remaining)
    item[item.length - 1].marginRight = marginRight
  }
  return item
}

// -----------------------------------------------------------------

const matrixRowMarginTransformer = (cols, gutter) => {
  return (item) => {}
}

// -----------------------------------------------------------------

const matrixItemIterator = mapTransducer(matrixItemTransformer(3, '20px'))
const matrixLayoutIterator = gateTransducer(
  matrixLayoutTransformer(3, children.length)
)
const matrixRowBalanceIterator = mapTransducer(
  matrixRowBalanceTransformer(3, '20px')
)

const transducer = compose(
  matrixItemIterator,
  matrixLayoutIterator,
  matrixRowBalanceIterator
)
const iterator = flip(append)

// compose(
//   map(dissoc('span')),
//   unnest,
//   adjust(-1, map(dissoc('mb'))),
//   reduce(transducer(iterator), [])
// )(children)

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
