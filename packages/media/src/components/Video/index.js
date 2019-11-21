import React from 'react'
import ReactPlayer from 'react-player'

import styled from 'styled-components'
import { position, size } from 'polished'

import { Flex } from 'rebass'

// ----------------------------------------------------------------------------

const ResponsivePlayer = styled(ReactPlayer)`
  ${position('absolute', 0)}
  ${size('100%')}
`

// ----------------------------------------------------------------------------

const Video = ({ url, width, height, config, sx, ...rest }) => {
  const ratio = `${(height / width) * 100}%`

  return (
    <Flex
      sx={{
        position: 'relative',
        width: '100%',
        pt: ratio,
        ...sx,
      }}
      {...rest}
    >
      <ResponsivePlayer url={url} config={config} width="100%" height="100%" />
    </Flex>
  )
}

export default Video
