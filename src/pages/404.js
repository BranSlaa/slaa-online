import React from 'react'
import Link from 'gatsby-link'

import { navigation } from '../global'

const NotFoundPage = () => (
  <div>
    <h1>404 NOT FOUND</h1>
    <p>I am sorry, this page does not exist.</p>
    <Link to={navigation.home.link} title={navigation.home.title}>
      Go {navigation.home.text}
    </Link>
  </div>
)

export default NotFoundPage
