import { useTheme } from 'emotion-theming'
import { get } from '@styled-system/css'

// ----------------------------------------------------------------------------

export const useVariant = (path, dflt = {}) => {
  const theme = useTheme()
  return get(theme, path, dflt)
}

export default useVariant
