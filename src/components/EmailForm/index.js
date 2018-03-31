import EmailForm from './EmailForm';
import styled, { injectGlobal } from 'styled-components';
import { color, typography, fontSize, mediaQuery } from '../../global';

injectGlobal`
.contactForm {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 37.5rem;
        margin: 0 auto;

        /* @media (${mediaQuery.medium}) {
            width: 50%;
        } */

        .inputFields {
            @media (${mediaQuery.large}) {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;

                label {
                    width: 48%;
                }
            }
        }

        label {
            font-size: ${fontSize.small};
        }

        textarea, input {
            padding: 0.75rem;
            margin-bottom: 1rem;
            width: 100%;
            border-radius: 0.5rem;
            border: 3px solid ${color.accent};
            transition: border 0.3s ease;

            &:active,
            &:focus {
                border: 3px solid ${color.darkGrey};
                outline: none;
            }

            &:hover {
                border: 3px solid ${color.primary};
            }
        }

        textarea {
            display: block;
            resize: none;
            height: 10rem;
        }

        button {
            width: 50%;
            margin: 1rem auto 3rem;
            padding: 0.75rem;
            border: 3px solid ${color.accent};
            border-radius: 0.5rem;
            font-size: ${fontSize.medium};
            color: ${color.accent};
            background-color: ${color.primary};
            font-weight: 700;
            text-transform: uppercase;
            transition: color 0.3s ease, background-color 0.3s ease;

            &:active,
            &:focus,
            &:hover {
                background-color: ${color.accent};
                color: ${color.almostBlack};
                outline: none;
            }
        }
    }
`;

export default EmailForm;
