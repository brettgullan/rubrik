import styled from 'styled-components'
import {
  compose,
  space,
  layout,
  typography,
  color,
  flexbox,
} from 'styled-system'
import css, { get } from '@styled-system/css'
import shouldForwardProp from '@styled-system/should-forward-prop'

// ----------------------------------------------------------------------------

const sx = (props) => css(props.sx)(props.theme)
const base = (props) => css(props.__css)(props.theme)
const variant = ({ theme, variant, tx = 'variants' }) =>
  css(get(theme, tx + '.' + variant, get(theme, variant)))(theme)

// ----------------------------------------------------------------------------

export const convertToRebass = (Component) =>
  styled(Component, {
    shouldForwardProp,
  })(
    {
      boxSizing: 'border-box',
    },
    base,
    variant,
    sx,
    (props) => props.css,
    compose(
      space,
      layout,
      typography,
      color,
      flexbox
    )
  )

export default convertToRebass
