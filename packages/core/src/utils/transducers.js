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

export const stepTransducer = (f) => (step) => (a, c) => reduce(step, a, f(c))

export const iterator = flip(append)
