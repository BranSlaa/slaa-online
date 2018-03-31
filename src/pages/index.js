import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/Hero';
import About from '../components/About';
import { navigation, color, fontSize } from '../global';
import heroImage from '../../static/hero.jpg';

const IndexPage = () => (
    <div>
        <Hero image={{ heroImage }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: '14rem 0'
                }}
            >
                <h1>Hi! I'm Brandon Slaa</h1>
                <p>A web developer in Ontario Canada.</p>
                <p>This is my site. It is currently a work in progress.</p>
            </div>
        </Hero>
        <About />
    </div>
);

export default IndexPage;
