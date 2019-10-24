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
  chunkingTransducer,
  iterator,
} from '../../../utils/transducers'

import {
  calculateMargin,
  calculateItemWidth,
  calculateRemainderMargin,
} from './calculators'

// ----------------------------------------------------------------------------

const mapIndexed = addIndex(map)

const zipObjAll = compose(
  map(unnest),
  converge(reduce(zip), [head, tail])
)

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

    return undefined
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

const generateLayout = (columns, gutters, children) => {
  const matrixItemIterator = mapTransducer(
    matrixItemTransformer(columns, gutters)
  )
  const matrixLayoutIterator = chunkingTransducer(
    matrixLayoutTransformer(columns, children.length)
  )
  const matrixRowBalanceIterator = mapTransducer(
    matrixRowBalanceTransformer(columns, gutters)
  )
  const matrixRowMarginIterator = mapTransducer(
    matrixRowMarginTransformer(gutters)
  )

  const transducer = compose(
    matrixItemIterator,
    matrixLayoutIterator,
    matrixRowMarginIterator
  )

  return compose(
    matrixClean,
    unnest,
    tap(console.log),
    matrixRemoveLastRowMargin,
    reduce(transducer(iterator), [])
  )(children)
}

const generateResponsiveLayout = (columns, gutters, children) =>
  compose(
    makeResponsiveProps,
    zipObjAll,
    map(apply(generateLayout)),
    normalizeResponsiveArguments
  )(columns, gutters, children)

// ----------------------------------------------------------------------------

const fixResponsiveChildProps = (props, index) =>
  map(
    evolve({
      span: nth(index),
    })
  )(props)

const buildResponsiveChildren = (length, children) =>
  compose(
    map(of),
    mapIndexed(fixResponsiveChildProps),
    repeat(__, length)
  )(children)

const normalizeResponsiveArguments = (columns, gutters, children) =>
  zipObjAll([
    columns,
    gutters,
    buildResponsiveChildren(columns.length, children),
  ])

const extractProps = pluck('props')

// ----------------------------------------------------------------------------

const Grid = ({ columns, gutters, children, ...rest }) => {
  const theme = useTheme()

  const matrix = is(String, columns)
    ? generateLayout(columns, gutters, extractProps(children))
    : generateResponsiveLayout(columns, gutters, extractProps(children))

  console.log(matrix)

  return (
    <Flex flexWrap="wrap" {...rest}>
      {children.map((child, index) =>
        cloneElement(child, { key: `matrixItem-${index}`, ...matrix[index] })
      )}
    </Flex>
  )
}

export default Grid
