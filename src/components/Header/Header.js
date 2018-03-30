import React from 'react'
import Link from 'gatsby-link'

import { navigation, colors } from '../../global'

const Header = () => (
  <div style={{ backgroundColor: colors.primary }}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <ul
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <li>
          <h1 style={{ margin: 0 }}>
            <Link
              to={navigation.home.link}
              title={navigation.home.title}
              style={{ color: 'white' }}
            >
              {navigation.home.text}
            </Link>
          </h1>
        </li>
        <li>
          <Link
            to={navigation.about.link}
            title={navigation.about.title}
            style={{ color: 'white' }}
          >
            {navigation.about.text}
          </Link>
        </li>
        <li>
          <Link
            to={navigation.blog.link}
            title={navigation.blog.title}
            style={{ color: 'white' }}
          >
            {navigation.blog.text}
          </Link>
        </li>
        <li>
          <Link
            to={navigation.contact.link}
            title={navigation.contact.title}
            style={{ color: 'white' }}
          >
            {navigation.contact.text}
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
