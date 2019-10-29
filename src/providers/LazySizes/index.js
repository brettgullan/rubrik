import React, { useContext, createContext } from 'react'

// ----------------------------------------------------------------------------

const canUseDOM = () =>
  !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )

// ----------------------------------------------------------------------------

let lazySizes

if (canUseDOM()) {
  lazySizes = require('lazysizes')
  require('lazysizes/plugins/blur-up/ls.blur-up')

  lazySizes.cfg.blurupMode = 'auto'
}

// ----------------------------------------------------------------------------

const LazySizesContext = createContext(null)

export default ({ children, options }) => {
  return (
    <LazySizesContext.Provider value={options}>
      {children}
    </LazySizesContext.Provider>
  )
}

export const useLazySizes = () => useContext(LazySizesContext)
