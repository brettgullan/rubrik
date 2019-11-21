import { useTheme } from '../providers/theme'
import { get } from '@styled-system/css'

// ----------------------------------------------------------------------------

export const useVariant = (path, dflt = {}) => {
  const theme = useTheme()
  return get(theme, path, dflt)
}

export default useVariant
