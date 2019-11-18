import { CloudinaryBuilder } from 'responsive-configuration-builder'

// ----------------------------------------------------------------------------

import cc from 'cloudinary-core'

// ----------------------------------------------------------------------------

/**
 * Factory function that produces a ResponsiveImageProvider context object.
 *
 * The return value of this function must be an object containing a responsive 'builder' instance.
 * The entire object is passed into the ResponsiveContext (and available using
 * React's useContext() hook).
 * However, the built-in useResponsiveBuilder() hook dereferences and returns
 * the 'builder' instance, for use by ResponsiveImage and ResponsivePicture components.
 */
const CloudinaryAdaptor = (options) => {
  const cloudinary = new cc.Cloudinary(options)
  const builder = CloudinaryBuilder(cloudinary)
  return {
    cloudinary,
    builder,
  }
}

export default CloudinaryAdaptor
