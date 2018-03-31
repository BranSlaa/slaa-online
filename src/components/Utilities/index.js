import Utilities from './Utilities';
import styled, { injectGlobal } from 'styled-components';
import { color, fontSize, mediaQuery } from '../../global';

injectGlobal`
    .utilities {
        padding: 3rem 0;
        background-color: ${color.primary};
        border-bottom: 0.25rem solid ${color.almostBlack};

        h2 {
            text-align: center;
            text-transform: capitalize;
            margin-bottom: 2rem;
        }
        .buckets {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

             @media (${mediaQuery.medium}) {
                flex-direction: row;
            }


            .bucket {
                padding: 1rem;

                border-radius: 0.5rem;
                background-color: ${color.almostWhite};
                color: ${color.almostBlack};
                width: 90%;
                margin: 0 auto;

                @media (${mediaQuery.medium}) {
                    width: 40%;
                }

                @media (${mediaQuery.large}) {
                    width: 33%;
                }

                p {
                    color: ${color.almostBlack};
                    font-size: ${fontSize.medium};
                }

                .bucketTitle {
                    text-align: center;
                    font-size: ${fontSize.large};
                    padding-bottom: 1rem;
                    margin-bottom: 2rem;
                    border-bottom: 0.2rem solid ${color.primary};
                }

                &.skills {
                    margin-bottom: 2rem;
                    span {
                        font-size: ${fontSize.small};
                    }

                    @media (${mediaQuery.medium}) {
                        margin-bottom: 0;
                    }
                }

                &.code {
                    .imageGrid {
                        display: flex;
                        flex-flow: row wrap;
                        justify-content: space-between;
                        align-items: center;

                        img {
                            height: 3rem;
                            width: auto;
                            margin-bottom: 0.5rem;
                        }
                    }
                }
            }
        }
    }
`;

export default Utilities;
