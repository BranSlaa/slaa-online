import About from './About';
import styled, { injectGlobal } from 'styled-components';
import { color, fontSize, mediaQuery } from '../../global';

injectGlobal`
    .about {
        padding: 3rem 0;

        h3 {

            font-size: ${fontSize.large};
            text-align: center;
            text-transform: capitalize;
        }
        .buckets {
            display: flex;
            flex-direction: column;

             @media (${mediaQuery.large}) {
                flex-direction: row;
            }


            .skills, .code {
                padding: 1rem;
                margin-bottom: 1rem;
                margin-top: 1rem;

                @media (${mediaQuery.large}) {
                    width: 100%;
                    border-radius: 1rem;
                }

                p {
                    font-size: ${fontSize.medium};
                }

                h4 {
                    text-align: center;
                    font-size: ${fontSize.large};
                    margin-bottom: 2rem;
                }
            }
            .skills {
                background-color: ${color.primary};
                margin-right: 5%;
                border-top-right-radius: 1rem;
                border-bottom-right-radius: 1rem;

                @media (${mediaQuery.medium}) {
                    margin-right: 10%;
                }

                @media (${mediaQuery.large}) {
                    margin: 1rem;
                }

                span {
                    font-size: ${fontSize.small};
                }
            }

            .code {
                background-color: ${color.asset};
                margin-left: 5%;
                border-top-left-radius: 1rem;
                border-bottom-left-radius: 1rem;


                @media (${mediaQuery.medium}) {
                    margin-left: 10%;
                }

                @media (${mediaQuery.large}) {
                    margin: 1rem;
                }

                .imageGrid {
                    display: flex;
                    flex-flow: row wrap;
                    justify-content: space-around;

                    img {
                        height: 3rem;
                        width: auto;
                    }
                }

                p, h4 {
                    color: ${color.almostBlack};
                }

            }
        }
    }
`;

export default About;
