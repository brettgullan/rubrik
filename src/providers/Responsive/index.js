import React, { useContext, createContext } from 'react'
import { CloudinaryBuilder } from 'responsive-configuration-builder'

// ----------------------------------------------------------------------------

import cloudinary from 'cloudinary-core'

// ----------------------------------------------------------------------------

const CloudinaryContext = createContext(null)

export default ({ children, options }) => {
  const cl = new cloudinary.Cloudinary(options)
  return (
    <CloudinaryContext.Provider value={cl}>
      {children}
    </CloudinaryContext.Provider>
  )
}

export const useCloudinary = () => useContext(CloudinaryContext)
export const useResponsiveBuilder = () => CloudinaryBuilder(useCloudinary())
