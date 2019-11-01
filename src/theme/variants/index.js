import { position, size } from 'polished'

// ----------------------------------------------------------------------------

import { nd } from '../colors'
import text from './text'

// ----------------------------------------------------------------------------

const variants = {
  card: {
    position: 'relative',
    bg: 'white.0',
    boxShadow: 'card',
    borderRadius: 2,
    overflow: 'hidden',
  },
  avatar: {
    borderRadius: '50%',
  },
  scrims: {
    default: {
      position: 'relative',
      width: '100%',
      '&:after': {
        content: '""',
        ...position('absolute', 0),
        ...size('100%'),
        backgroundImage: `linear-gradient(to top, ${nd[3]}, transparent 40%)`,
      },
    },
  },
  ...text,
}

// ----------------------------------------------------------------------------

export default variants
