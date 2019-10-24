import { append, flip, isNil, reduce } from 'ramda'

// ----------------------------------------------------------------------------

export const mapTransducer = (f) => (step) => (a, c) => step(a, f(c))

export const filterTransducer = (predicate) => (step) => (a, c) =>
  predicate(c) ? step(a, c) : a

export const doubleGateTransducer = (p, f) => (step) => (a, c) =>
  p(c) ? step(a, f(c)) : a

export const dropTransducer = (f) => (step) => (a, c) => {
  const result = f(c)
  return result ? step(a, result) : a
}

/**
 * Allow a transformer function (f) to return zero or more results
 * to be subsequently reduced. The transformer function returns
 * an array or undefined
 */
export const stepTransducer = (f) => (step) => (a, c) => {
  let acc = a
  const chunks = f(c)

  if (isNil(chunks)) return a

  chunks.forEach((chunk) => {
    acc = step(acc, chunk)
  })

  return acc
}

export const iterator = flip(append)
