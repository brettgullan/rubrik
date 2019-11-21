/* global window */

export const useHasDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)
