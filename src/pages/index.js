import React from 'react'
import Link from 'gatsby-link'

import ButtonLink from '../components/ButtonLink'
import Hero from '../components/Hero'
import { navigation, colors } from '../global'

const IndexPage = () => (
  <Hero image="https://picsum.photos/g/1200/800?blur">
    <h1
      style={{
        color: colors.almostWhite,
      }}
    >
      Hi! I'm Brandon Slaa
    </h1>
    <p
      style={{
        color: colors.almostWhite,
      }}
    >
      A web developer in Ontario Canada.
    </p>
    <p
      style={{
        color: colors.almostWhite,
      }}
    >
      This is my site. It is currently a work in progress.
    </p>
  </Hero>
)



export default IndexPage
