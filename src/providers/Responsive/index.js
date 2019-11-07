import React, { useContext, createContext } from 'react'
import { CloudinaryBuilder } from 'responsive-configuration-builder'

// ----------------------------------------------------------------------------

import cloudinary from 'cloudinary-core'

// ----------------------------------------------------------------------------

const ResponsiveContext = createContext(null)

export default ({ children, options }) => {
  const cl = new cloudinary.Cloudinary(options)
  return (
    <ResponsiveContext.Provider value={cl}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export const useCloudinary = () => useContext(ResponsiveContext)
export const useResponsiveBuilder = () => CloudinaryBuilder(useCloudinary())
