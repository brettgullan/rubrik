export const styles = {
  //
  // '.slick-slider': {
    position: 'relative',
    display: 'block',
    boxSizing: 'border-box',
    userSelect: 'none',

    // webkitTouchCallout: 'none',
    khtmlUserSelect: 'none',
    msTouchAction: 'pan-y',
    touchAction: 'pan-y',
    webkitTapHighlightColor: 'transparent',
  // },

  //
  '.slick-list': {
    position: 'relative',
    display: 'block',
    overflow: 'hidden',
    margin: 0,
    padding: 0,

    '&:focus': {
      outline: 'none',
    },
    '&.dragging': {
      cursor: 'pointer',
      cursor: 'hand',
    },
  },

  //
  '.slick-slider .slick-track, .slick-slider .slick-list': {
    transform: 'translate3d(0, 0, 0)',
  },

  //
  '.slick-track': {
    display: 'block',
    position: 'relative',
    top: 0,
    left: 0,
    mx: 'auto',

    '&:before, &:after': {
      display: 'table',
      content: '""',
    },
    '&:after': {
      clear: 'both',
    },
    '.slick-loading &': {
      visibility: 'hidden',
    },
  },

  //
  '.slick-slide': {
    // display: 'none',
    float: 'left',
    height: '100%',
    minHeight: '1px',

    '[dir="rtl"] &': {
      float: 'right',
    },

    '& img': {
      display: 'block',
    },
    '&.slick-loading img': {
      display: 'none',
    },
    '&.dragging img': {
      pointerEvents: 'none',
    },
    '.slick-initialized &': {
      display: 'block',
    },
    '.slick-loading &': {
      visibility: 'hidden',
    },
    '.slick-vertical &': {
      display: 'block',
      height: 'auto',
      border: '1px solid transparent',
    },
  },

  //
  '.slick-arrow': {
    '&.slick-hidden': {
      display: 'none',
    },
  },
}

export default styles
