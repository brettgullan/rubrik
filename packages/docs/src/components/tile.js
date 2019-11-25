import { TokenBuilder } from 'responsive-configuration-builder'

const template = 'https://picsum.photos/id/{id}/{width}/{height}'
const builder = TokenBuilder(template)

const spec = {
  srcset: {
    widths: [320, 480, 640],
    ratio: 16 / 9,
  },
}

const image = {
  id: 1018,
}

const { srcset } = builder(spec, image)

console.log(srcset)

export default srcset
