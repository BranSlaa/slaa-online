import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { colors } from '../global';

import './style';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Slaa Online | Personal Website"
            meta={[
                {
                    name: 'description',
                    content: 'The personal website of Brandon Slaa'
                },
                { name: 'keywords', content: 'Brandon Slaa, Web Developer' }
            ]}
        />
        <Header />

        {children()}

        <Footer />
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func
};

export default TemplateWrapper;
