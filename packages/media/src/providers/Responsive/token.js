import { TokenBuilder } from 'responsive-configuration-builder'

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
const TokenAdaptor = ({ template }) => {
  const builder = TokenBuilder(template)
  return {
    template,
    builder,
  }
}

export default TokenAdaptor
