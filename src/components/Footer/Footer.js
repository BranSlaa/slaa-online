import React from 'react'
import Link from 'gatsby-link'
import Emailform from '../EmailForm'

import { navigation, colors } from '../../global'

const Footer = () => (
  <footer>
    <p>Want to get in contact? Please leave a message below!</p>
    <Emailform />
  </footer>
)

export default Footer
