import { useVariant } from '.'

// ----------------------------------------------------------------------------

export const useImageConfig = (path) => useVariant(`images.${path}`)

export default useImageConfig
