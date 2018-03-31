import About from './About';
import styled, { injectGlobal } from 'styled-components';
import { color, fontSize, mediaQuery } from '../../global';

injectGlobal`
    .about {
        padding: 3rem;

        .sectionTitle {
            text-align: center;
            text-transform: capitalize;
            margin-bottom: 2rem;

        }

        .workPlace {
            display: inline;
            text-transform: uppercase;
            /* text-decoration: underline;
            text-decoration-color: ${color.primary}; */
            border-bottom: 3px solid ${color.primary};

            .jobTitle {
                font-size: ${fontSize.small};
                text-transform: capitalize;
                /* text-decoration: underline;
                text-decoration-color: ${color.primaryLight}; */
            }
        }
    }
`;

export default About;
