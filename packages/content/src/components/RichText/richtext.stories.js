import React from 'react'
import { withKnobs, optionsKnob as options } from '@storybook/addon-knobs'

// ----------------------------------------------------------------------------

import theme from '../../../theme'

// ----------------------------------------------------------------------------

import RichText from '.'

// ----------------------------------------------------------------------------

export default {
  title: 'Design System|Elements/Content/RichText',
  component: RichText,
  decorators: [withKnobs],

  parameters: {
    component: RichText,
    componentSubtitle: 'Rich text component',
  },
}

// ----------------------------------------------------------------------------

const richText = `<h1>HTML Ipsum Presents</h1>
<p>
  <strong>Pellentesque habitant morbi tristique</strong> senectus et netus
  et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
  vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
  quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris
  placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
  pharetra. Vestibulum erat wisi, condimentum sed,
  <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum, elit
  eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus
  enim ac dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis.
  Ut felis.
</p>
<ul>
  <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
  <li>Aliquam tincidunt mauris eu risus.</li>
  <li>Vestibulum auctor dapibus neque.</li>
</ul>
<p>
  Pellentesque habitant morbi tristique senectus et netus et malesuada fames
  ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
  tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
  Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
</p>`

// ----------------------------------------------------------------------------

export const Primary = () => <RichText>{richText}</RichText>
export const WithTextProp = () => <RichText text={richText} />

export const WithSxProp = () => (
  <RichText
    sx={{
      ...theme.text.greatPrimer,
      color: 'gray.3',
      h1: {
        color: 'brand.primary',
      },
      strong: {
        color: 'text',
      },
      a: {
        textDecoration: 'none',
        color: 'brand.primary',
      },
    }}
  >
    {richText}
  </RichText>
)
WithSxProp.story = {
  name: 'With SX Prop',
}
