import { useVariant } from '@rubrik/core'

// ----------------------------------------------------------------------------

export const useImageConfig = (path) => useVariant(`images.${path}`)

export default useImageConfig
