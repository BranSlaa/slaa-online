import React from 'react'
import Link from 'gatsby-link'

import { color } from '../../global'

const Buttonlink = ({ children, type, ...rest }) => {
  return (
    <Link {...rest} style={styles}>
      {children}
    </Link>
  )
}

const styles = {
  border: '2px solid ' + color.primary,
  borderRadius: '20px',
  padding: '0.5rem',
}

export default Buttonlink
