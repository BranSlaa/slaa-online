import React from 'react'
import Link from 'gatsby-link'

import { colors } from '../../global'

const ButtonLink = ({ children, type, ...rest }) => {
  return (
    <Link {...rest} style={styles}>
      {children}
    </Link>
  )
}

const styles = {
  border: '2px solid ' + colors.primary,
  borderRadius: '20px',
  padding: '0.5rem',
}

export default ButtonLink
