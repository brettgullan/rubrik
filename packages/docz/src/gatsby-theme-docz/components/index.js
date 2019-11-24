/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Heading, Text } from '@theme-ui/components'
import baseComponents from 'gatsby-theme-docz/src/components/index'

const MyCustomH1 = (props) => {
  return <div className="myH1" {...props} />
}

const Head = ({ children, ...rest }) => {
  return (
    <Heading as="h1" sx={{ fontWeight: '300', fontSize: 7 }}>
      {children}
    </Heading>
  )
}

const Lede = ({ children, ...rest }) => {
  return <Text sx={{ fontWeight: '300', fontSize: 5 }}>{children}</Text>
}

export default {
  ...baseComponents,
  head: Head,
  lede: Lede,
}
