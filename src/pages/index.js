import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/Hero';
import About from '../components/About';
import Utilities from '../components/Utilities';
import { navigation, color, fontSize } from '../global';
import heroImage from '../../static/hero.jpg';
import ButtonLink from '../components/ButtonLink';

const IndexPage = () => (
    <div>
        <Hero image={{ heroImage }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    padding: '14rem 0',
                    textAlign: 'center'
                }}
            >
                <h1
                    style={{
                        marginBottom: '1rem',
                        lineHeight: '1.5'
                    }}
                >
                    Hi! I'm{' '}
                    <span
                        style={{
                            borderBottom: `0.5rem solid ${color.primary}`
                        }}
                    >
                        Brandon Slaa
                    </span>
                </h1>
                <p
                    style={{
                        maxWidth: '600px',
                        fontSize: `${fontSize.medium}`
                    }}
                >
                    I am a hard-working and dedicated Full Stack Web Developer
                    with a goal of making the web fast, efficient and highly
                    usable through proper web performance techniques and
                    creating with a mobile first mindset. I am enthusiatic about
                    upcoming technologies and get excited when working with tech
                    made by people with similar passions.
                </p>
                <ButtonLink to="#contact">Let's Chat!</ButtonLink>
            </div>
        </Hero>
        <About />
        <Utilities />
    </div>
);

export default IndexPage;
