import React from 'react';
import Link from 'gatsby-link';
import EmailForm from '../EmailForm';
import twitterLogo from '../../../static/Twitter_Logo_Blue.svg';
import linkedinLogo from '../../../static/linkedin.png';
import githubLogo from '../../../static/GitHub_Logo.png';

import { navigation, color, fontSize } from '../../global';

const Footer = () => (
    <footer
        id="contact"
        style={{
            backgroundColor: `${color.secondary}`,
            padding: '3rem 10% 1rem'
        }}
    >
        <p
            style={{
                fontSize: `${fontSize.medium}`,
                textAlign: 'center',
                marginBottom: '2rem'
            }}
        >
            Want to get in contact?<br />Please leave a message below!
        </p>
        <EmailForm />
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center'
            }}
        >
            <p
                style={{
                    fontSize: `${fontSize.medium}`,
                    textAlign: 'center',
                    marginBottom: '0.5rem'
                }}
            >
                Copyright &copy; {new Date().getFullYear()}
            </p>
            <p
                style={{
                    fontSize: `${fontSize.medium}`,
                    textAlign: 'center',
                    marginBottom: '0.5rem'
                }}
            >
                <a href="https://twitter.com/BrandonSlaa">
                    <img
                        style={{ height: '3rem', width: 'auto' }}
                        src={twitterLogo}
                    />
                </a>
                <a href="https://twitter.com/BrandonSlaa">
                    <img
                        style={{ height: '3rem', width: 'auto' }}
                        src={linkedinLogo}
                    />
                </a>
                <a className="gitLogo" href="https://github.com/BranSlaa/">
                    {/* <img
                        style={{ height: '4rem', width: 'auto' }}
                        src={githubLogo}
                    /> */}
                </a>
            </p>
        </div>
    </footer>
);

export default Footer;
