import colors from '../../colors'
import text from '../text'

// ----------------------------------------------------------------------------

const content = {
  richtext: {
    ...text.bodyCopy,
  },
  pullquote: {
    block: {
      p: 4,
      borderLeft: `4px solid ${colors.brand.primary}`,
    },
    quote: {
      ...text.paragon,
    },
    attribution: {
      ...text.pica,
      // apply top margin (against protocol) as this is conditional element.
      mt: 3,
    },
  },
}

// ----------------------------------------------------------------------------

export default content
