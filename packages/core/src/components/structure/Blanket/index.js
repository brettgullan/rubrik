import styled from '@emotion/styled'

import { position } from 'polished'
import { Box } from 'rebass'

// ----------------------------------------------------------------------------

export const Blanket = styled(Box)({
  ...position('fixed', 0),
  width: '100vw',
  height: '100vh',
})

export default Blanket
