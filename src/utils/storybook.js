import React from 'react'

// import { CloudinaryAdaptor, ResponsiveProvider } from '../../packages/media/src'
import { CloudinaryAdaptor, ResponsiveProvider } from '@rubrik/media'

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
