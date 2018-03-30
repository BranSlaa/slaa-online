import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import { colors } from "../global";

import "./style";

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet
            title="Slaa"
            meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" }
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
