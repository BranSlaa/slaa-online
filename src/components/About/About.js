import React from 'react';

import htmlLogo from '../../../static/HTML5_Logo.svg';
import sassLogo from '../../../static/Sass_Logo.svg';
import phpLogo from '../../../static/php-logo.svg';
import cSharpLogo from '../../../static/csharp_logo.svg';

const About = () => (
    <section className="about">
        <h3>What I can do</h3>
        <div className="buckets">
            <div className="skills">
                <h4>Skills</h4>
                <p>
                    CMS's: <span>Wordpress, Concrete5, Silverstripe</span>
                </p>
                <p>
                    Javascript Frameworks: <span>React, Vue, Angular</span>
                </p>
                <p>
                    Other Frameworks: <span>Laravel, .NET</span>
                </p>
            </div>
            <div className="code">
                <h4>Languages</h4>
                <div className="imageGrid">
                    <img src={htmlLogo} />
                    <img src={sassLogo} />
                    <img src={phpLogo} />
                    <img src={cSharpLogo} />
                </div>
            </div>
        </div>
    </section>
);

export default About;
