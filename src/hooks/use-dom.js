/* global window */

export const useDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
)
