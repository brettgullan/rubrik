import React, { cloneElement } from 'react'
import {
  __,
  addIndex,
  adjust,
  apply,
  applySpec,
  assoc,
  compose,
  converge,
  evolve,
  flatten,
  head,
  is,
  juxt,
  last,
  map,
  nth,
  of,
  omit,
  pluck,
  reduce,
  repeat,
  slice,
  sum,
  tail,
  tap,
  unnest,
  zip,
} from 'ramda'
import { Flex } from 'rebass'
import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'

import {
  mapTransducer,
  stepTransducer,
  iterator,
} from '../../../utils/transducers'

import {
  calculateMargin,
  calculateItemWidth,
  calculateRemainderMargin,
} from './calculators'

// ----------------------------------------------------------------------------

const mapIndexed = addIndex(map)

// This isn't quite right.
// Works for the particular case of columns, gutters and children,
// but doesn't handle more generic two-dimensional arrays.
const zipObjAll = compose(
  map(unnest),
  converge(reduce(zip), [head, tail])
)

// -----------------------------------------------------------------

/**
 * Transformer function
 * Converts 1-dimensional array of children (props) into a 2-dimensional
 * representation of the matrix layout for a given breakpoint.
 * Each completed `row` is forwarded through the reducer for
 * additional processing -- i.e. calculating gutter spacing.
 */
const matrixLayoutTransformer = (cols, totalItems) => {
  let count = 0
  let colSpan = 0
  let row = new Array()

  return (item) => {
    const { span } = item
    ++count

    if (colSpan + span > cols) {
      const result = row
      row = new Array()
      row.push(item)
      colSpan = span

      // Edge-case -- return both rows if this is the last item.
      // Will occur when the last item 'breaks over' and begins
      // a new row.
      if (count === totalItems) return [result, row]

      return [result]
    }

    // deliberate use of `==` below, as cols may be string value "1".
    if (colSpan + span == cols) {
      row.push(item)
      const result = row
      row = new Array()
      colSpan = 0
      return [result]
    }

    row.push(item)
    colSpan = colSpan + span

    // Edge-case -- return row if last item.
    if (count === totalItems) return [row]

    return []
  }
}

// -----------------------------------------------------------------

/**
 * Calculate matrix item width, margin props.
 */
const matrixItemTransformer = (cols, gutters) => ({ span = 1, mb }) => {
  const width = calculateItemWidth(span, cols, gutters)
  return { span, width, mb: mb || gutters }
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
const matrixRowBalanceTransformer = (cols, gutters) => (row) => {
  const remaining =
    cols -
    compose(
      sum,
      pluck('span')
    )(row)
  if (remaining && row.length > 1) {
    const marginRight = calculateRemainderMargin(cols, gutters, remaining)
    row[row.length - 1].marginRight = marginRight
  }
  return row
}

// -----------------------------------------------------------------

/**
 * Apply left, right or horizontal margins to each item in each row
 * as required -- i.e: first and last items get right or left margin only,
 * all others in row get both.
 */
const matrixRowMarginTransformer = (gutters) => {
  const margin = calculateMargin(gutters)
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
              map(assoc('ml', margin)),
              map(assoc('mr', margin)),
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

/**
 * Remove unused props from final list of children.
 * i.e. `span` is only used to calculate the `width` property and should be removed.
 */
const matrixClean = map(omit(['span']))
const matrixRemoveLastRowMargin = adjust(-1, map(omit(['mb', 'marginBottom'])))

// ----------------------------------------------------------------------------

const buildResponsiveSizeProp = (prop, dflt = '0px') =>
  compose(
    map((x) => (!!x ? x : dflt)),
    pluck(prop)
  )

const makeResponsiveProps = map(
  applySpec({
    mr: buildResponsiveSizeProp('mr'),
    ml: buildResponsiveSizeProp('ml'),
    mb: buildResponsiveSizeProp('mb'),
    width: pluck('width'),
  })
)

// ----------------------------------------------------------------------------

/**
 * Calculate layout properties -- widths, margins -- for each child, for a single breakpoint,
 * using specified column count and gutter spacing.
 *
 * @return {Array} array of child props to use with React.cloneElement
 */
const generateLayout = (column, gutter, children) => {
  const matrixItemIterator = mapTransducer(
    matrixItemTransformer(column, gutter)
  )
  const matrixLayoutIterator = stepTransducer(
    matrixLayoutTransformer(column, children.length)
  )
  const matrixRowBalanceIterator = mapTransducer(
    matrixRowBalanceTransformer(column, gutter)
  )
  const matrixRowMarginIterator = mapTransducer(
    matrixRowMarginTransformer(gutter)
  )

  const transducer = compose(
    matrixItemIterator,
    matrixLayoutIterator,
    matrixRowMarginIterator
  )

  return compose(
    matrixClean,
    unnest,
    matrixRemoveLastRowMargin,
    reduce(transducer(iterator), [])
  )(children)
}

/**
 * Calculate layout properties -- widths, margins -- for each child, across multiple breakpoints
 * using specified column counts and gutter spacings.
 * Responsive properties -- width, mr, ml, mb -- are returned in array format
 * compatible with styled-system's responsive style props.
 *
 * @return {Array} array of child props to use with React.cloneElement
 */
const generateResponsiveLayout = (columns, gutters, children) =>
  compose(
    makeResponsiveProps,
    // zipObjAll,
    // This correctly handles multiple arrays (of equal length arrays)...
    compose(
      map(flatten),
      converge(reduce(zip), [head, tail])
    ),
    map(apply(generateLayout)),
    constructResponsiveArguments
  )(columns, gutters, children)

// ----------------------------------------------------------------------------

/**
 * Just grab the `props` object from each React child,
 * (so we have an array of child props, not an array of children).
 */
const extractProps = pluck('props')

/**
 * Construct n arrays of arguments (column, gutter, children), one per breakpoint.
 */

const constructResponsiveArguments = (columns, gutters, children) =>
  zipObjAll([
    columns,
    gutters,
    buildResponsiveChildren(columns.length, children),
  ])

/**
 * Construct n arrays of child props, one per breakpoint,
 * modifying individual child props as required --
 * i.e.: convert responsive array props to invidual values.
 */
const buildResponsiveChildren = (length, children) =>
  compose(
    map(of),
    mapIndexed(convertResponsiveChildProps),
    repeat(__, length)
  )(children)

/**
 * Convert props for each child at specified breakpoint index.
 */
const convertResponsiveChildProps = (children, index) =>
  map(
    evolve({
      span: nth(index),
    })
  )(children)

// ----------------------------------------------------------------------------

const Grid = ({ columns, gutters, children, ...rest }) => {
  const theme = useTheme()

  const matrix = is(String, columns)
    ? generateLayout(columns, gutters, extractProps(children))
    : generateResponsiveLayout(columns, gutters, extractProps(children))

  // console.log(matrix)

  return (
    <Flex flexWrap="wrap" {...rest}>
      {children.map((child, index) =>
        cloneElement(child, { key: `matrixItem-${index}`, ...matrix[index] })
      )}
    </Flex>
  )
}

export default Grid
