import React from 'react'

// ----------------------------------------------------------------------------

import { Button, Flex } from 'rebass'

// ----------------------------------------------------------------------------

const customStyles = {
  display: 'block',
  position: 'absolute',
  zIndex: 10,
  top: '50%',
  '&.slick-prev': {
    left: 0,
    background: 'red',
  },
  '&.slick-next': {
    right: 0,
    background: 'green',
  },
}
export const NextArrow = ({ className, style, onClick }) => {
  return (
    <Button
      className={className}
      sx={{ ...style, ...customStyles }}
      onClick={onClick}
    />
  )
}

export const PrevArrow = ({ className, style, onClick }) => {
  return (
    <Button
      className={className}
      sx={{ ...style, ...customStyles }}
      onClick={onClick}
    />
  )
}

export const Dots = (dots) => (
  <Flex
    as="ul"
    sx={{
      justifyContent: 'center',
      borderRadius: '10px',
      padding: '10px',
      margin: '0px',
      listStyle: 'none',

      // button: {
      //   p: 3,
      //   border: '3px solid #999',
      //   borderRadius: '128px',
      //   mx: 3,
      // },

      button: {
        fontSize: 0,
        lineHeight: 0,
        mx: 2,

        display: 'block',

        width: '16px',
        height: '16px',
        padding: '5px',

        cursor: 'pointer',

        color: 'transparent',
        // border: 0,
        border: '2px solid #999',
        borderRadius: '128px',
        outline: 'none',
        background: 'transparent',

        'button:hover, button:focus': {
          outline: 'none',

          '&:before': {
            opacity: 1,
          },
        },

        '&:before': {
          position: 'absolute',
          top: 0,
          left: 0,

          width: '16px',
          height: '16px',

          content: '""',
          textAlign: 'center',

          opacity: 0.25,
          color: 'black',

          webkitFontSmoothing: 'antialiased',
          mozOsxFontSmoothing: 'grayscale',

          '.slick-active &': {
            opacity: 0.75,
            color: 'black',
          },
        },
      },
    }}
  >
    {dots}
  </Flex>
)
