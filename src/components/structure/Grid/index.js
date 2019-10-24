import React, { cloneElement } from 'react'
import {
  __,
  adjust,
  apply,
  applySpec,
  assoc,
  compose,
  concat,
  converge,
  head,
  identity,
  juxt,
  last,
  map,
  of,
  omit,
  pluck,
  reduce,
  slice,
  sum,
  tail,
  tap,
  unnest,
  useWith,
  zip,
} from 'ramda'
import { Flex } from 'rebass'
import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'

import {
  mapTransducer,
  dropTransducer,
  iterator,
} from '../../../utils/transducers'

import {
  calculateMargin,
  calculateItemWidth,
  calculateRemainderMargin,
} from './calculators'

// ----------------------------------------------------------------------------

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

/**
 * Calculate matrix item width, margin props.
 */
const matrixItemTransformer = (cols, gutters) => ({ props }) => {
  const { span = 1, mb } = props
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
const matrixRowBalanceTransformer = (cols, gutters) => (item) => {
  const remaining =
    cols -
    compose(
      sum,
      pluck('span')
    )(item)
  if (remaining && item.length > 1) {
    const marginRight = calculateRemainderMargin(cols, gutters, remaining)
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

const generateLayout = (columns, gutters, items) => {
  const matrixItemIterator = mapTransducer(
    matrixItemTransformer(columns, gutters)
  )
  const matrixLayoutIterator = dropTransducer(
    matrixLayoutTransformer(columns, items.length)
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
    matrixRemoveLastRowMargin,
    reduce(transducer(iterator), [])
  )(items)
}

// ----------------------------------------------------------------------------

const normalizeResponsiveArguments = (columns, gutters, children) => {
  return compose(
    map(concat(__, of(children))),
    useWith(zip, [identity, identity])
  )(columns, gutters)
}

// ----------------------------------------------------------------------------

const Grid = ({ columns, gutters, children, ...rest }) => {
  const theme = useTheme()

  const matrix = compose(
    tap(console.log),
    makeResponsiveProps,
    zipObjAll,
    map(apply(generateLayout)),
    normalizeResponsiveArguments
  )(columns, gutters, children)

  return (
    <Flex flexWrap="wrap" {...rest}>
      {children.map((child, index) =>
        cloneElement(child, { key: `matrixItem-${index}`, ...matrix[index] })
      )}
    </Flex>
  )
}

export default Grid
