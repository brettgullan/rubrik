import React from 'react'

import CloudinaryAdaptor from '../../packages/media/src/providers/Responsive/cloudinary'
import ResponsiveProvider from '../../packages/media/src/providers/Responsive'

// ----------------------------------------------------------------------------

export const withResponsiveProvider = (storyFn) => (
  <ResponsiveProvider
    adaptor={CloudinaryAdaptor({
      cloud_name: 'caradvice',
      private_cdn: true,
      secure_distribution: 'media.caradvice.com.au',
      secure: true,
    })}
  >
    {storyFn()}
  </ResponsiveProvider>
)
