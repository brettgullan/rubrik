/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Heading, Text } from '@theme-ui/components'
import baseComponents from 'gatsby-theme-docz/src/components/index'

const MyCustomH1 = (props) => {
  return <div className="myH1" {...props} />
}

const Head = ({ children, sx, ...rest }) => {
  return (
    <Heading as="h1" sx={{ fontWeight: '300', fontSize: 7, ...sx }} {...rest}>
      {children}
    </Heading>
  )
}

const Lede = ({ children, sx, ...rest }) => {
  return (
    <Text sx={{ fontWeight: '300', fontSize: 5, mb: 4, ...sx }} {...rest}>
      {children}
    </Text>
  )
}

export default {
  ...baseComponents,
  head: Head,
  lede: Lede,
}
