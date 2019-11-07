import React, { useContext, createContext } from 'react'

// ----------------------------------------------------------------------------

export const ResponsiveContext = createContext(null)

export default ({ children, adaptor }) => {
  return (
    <ResponsiveContext.Provider value={adaptor}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export const useResponsiveBuilder = () => {
  const { builder } = useContext(ResponsiveContext)
  return builder
}
