import { map, merge } from 'ramda'

// ----------------------------------------------------------------------------

const baseText = {
  color: 'text',
  textDecoration: 'none',
}

const text = map(merge(baseText), {
  atlas: {
    fontFamily: 'text',
    fontSize: ['96px', '192px'],
    lineHeight: ['104px', '208px'],
  },
  elephant: {
    fontFamily: 'text',
    fontSize: ['78px', '156px'],
    lineHeight: ['84px', '170px'],
  },
  imperial: {
    fontFamily: 'text',
    fontSize: ['64px', '124px'],
    lineHeight: ['72px', '136px'],
  },
  royal: {
    fontFamily: 'text',
    fontSize: ['52px', '94px'],
    lineHeight: ['60px', '104px'],
  },
  foolscap: {
    fontFamily: 'text',
    fontSize: ['40px', '72px'],
    lineHeight: ['44px', '80px'],
  },

  canon: {
    fontFamily: 'title',
    fontWeight: 'light',
    fontSize: ['32px', '52px'],
    lineHeight: ['36px', '56px'],
  },
  trafalgar: {
    fontFamily: 'title',
    fontWeight: 'light',
    fontSize: ['24px', '36px'],
    lineHeight: ['28px', '40px'],
  },
  paragon: {
    fontFamily: 'title',
    fontSize: ['22px', '28px'],
    lineHeight: ['26px', '32px'],
  },
  doublePica: {
    fontFamily: 'text',
    fontSize: ['20px', '26px'],
    lineHeight: ['24px', '30px'],
  },
  greatPrimer: {
    fontFamily: 'text',
    fontSize: ['18px', '21px'],
    lineHeight: ['22px', '24px'],
  },

  bodyCopy: {
    fontFamily: 'text',
    fontWeight: 'regular',
    fontSize: ['16px', '18px'],
    lineHeight: ['22px', '24px'],
  },

  pica: {
    fontFamily: 'text',
    fontSize: ['16px', '18px'],
    lineHeight: ['20px', '22px'],
  },
  longPrimer: {
    fontFamily: 'text',
    fontSize: ['15px', '15px'],
    lineHeight: ['18px', '20px'],
  },
  brevier: {
    fontFamily: 'text',
    fontSize: ['14px', '14px'],
    lineHeight: ['18px', '18px'],
  },
  minion: {
    fontFamily: 'text',
    fontWeight: 'light',
    fontSize: ['12px', '13px'],
    lineHeight: '16px',
    textTransform: 'uppercase',
  },
})

export default text
