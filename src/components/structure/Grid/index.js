import React, { cloneElement } from 'react'
import {
  adjust,
  append,
  assoc,
  compose,
  flip,
  head,
  juxt,
  last,
  map,
  omit,
  pluck,
  reduce,
  slice,
  sum,
  tap,
  unnest,
} from 'ramda'
import { Flex } from 'rebass'

// ----------------------------------------------------------------------------

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
      return result
    }

    // deliberate use of `==` below, as cols may be string value "1".
    if (colSpan + span == cols) {
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

const calculateMargin = (gutter) => {
  const matches = gutter.match(/(\-*)(\d*)(.*)/)
  return matches ? `${matches[1]}${matches[2] / 2}${matches[3]}` : gutter
}

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
const matrixItemTransformer = (cols, gutter) => ({ props }) => {
  const { span = 1, mb } = props
  const width = calculateItemWidth(span, cols, gutter)
  return { span, width, mb: mb || gutter }
}

// -----------------------------------------------------------------

/**
 * Determine whether a matrix `row` has empty columns and, if so,
 * calculate margin and assign to last item in row.
 * But only if there is more than one item in the row!
 *
 * This works. And can be used together with margin-less grid items
 * and justifyContent=space-between.
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

/**
 * Apply left, right or horizontal margins to each item in each row
 * as required -- i.e: first and last items get right or left margin only,
 * all others in row get both.
 */
const matrixRowMarginTransformer = (gutter) => {
  const margin = calculateMargin(gutter)
  return (item) =>
    item.length === 1
      ? item
      : compose(
          unnest,
          juxt([
            compose(
              assoc('mr', margin),
              head
            ),
            compose(
              map(assoc('mx', margin)),
              slice(1, -1)
            ),
            compose(
              assoc('ml', margin),
              last
            ),
          ])
        )(item)
}

// -----------------------------------------------------------------

const matrixClean = map(omit(['span']))
const matrixRemoveLastRowMargin = adjust(-1, map(omit(['mb', 'marginBottom'])))

// ----------------------------------------------------------------------------

const Grid = ({ columns, gutter, children, ...rest }) => {
  const matrixItemIterator = mapTransducer(
    matrixItemTransformer(columns, gutter)
  )
  const matrixLayoutIterator = dropTransducer(
    matrixLayoutTransformer(columns, children.length)
  )
  const matrixRowBalanceIterator = mapTransducer(
    matrixRowBalanceTransformer(columns, gutter)
  )
  const matrixRowMarginIterator = mapTransducer(
    matrixRowMarginTransformer(gutter)
  )

  const transducer = compose(
    matrixItemIterator,
    matrixLayoutIterator,
    matrixRowMarginIterator
  )
  const iterator = flip(append)

  const matrix = compose(
    matrixClean,
    unnest,
    matrixRemoveLastRowMargin,
    reduce(transducer(iterator), [])
  )(children)

  return (
    <Flex flexWrap="wrap" {...rest}>
      {children.map((child, index) =>
        cloneElement(child, { key: `matrixItem-${index}`, ...matrix[index] })
      )}
    </Flex>
  )
}

export default Grid
