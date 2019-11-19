import { useVariant } from './use-variant'

// ----------------------------------------------------------------------------

export const useImageConfig = (path) => useVariant(`images.${path}`)

export default useImageConfig
