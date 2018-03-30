import React from 'react'
import Link from 'gatsby-link'

import ButtonLink from '../components/ButtonLink'
import Hero from '../components/Hero'
import { navigation, colors } from '../global'
import heroImage from '../../static/hero.jpg'

const IndexPage = () => (
  <div>
    <Hero image={{ heroImage }}>
      <div className="heroContent">
        <h1>Hi! I'm Brandon Slaa</h1>
        <p>A web developer in Ontario Canada.</p>
        <p>This is my site. It is currently a work in progress.</p>
      </div>
    </Hero>
    <section className="about">
      <p>some text</p>
    </section>
  </div>
)

export default IndexPage
