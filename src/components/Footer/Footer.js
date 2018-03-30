import React from 'react'
import Link from 'gatsby-link'
import EmailForm from '../EmailForm'

import { navigation, color, fontSize } from '../../global'

const Footer = () => (
  <footer style={{ backgroundColor: `${color.secondary}` }}>
    <p
      style={{
        fontSize: `${fontSize.medium}`,
        textAlign: 'center',
        marginBottom: '0.5rem',
      }}
    >
      Want to get in contact? Please leave a message below!
    </p>
    <EmailForm />
  </footer>
)

export default Footer
