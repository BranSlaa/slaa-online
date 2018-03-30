import EmailForm from './EmailForm'
import styled, { injectGlobal } from 'styled-components'
import { colors, fontSizes, mediaQueries } from '../../global'

injectGlobal`
    .contactForm {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 0 auto;

        @media (${mediaQueries.medium}) {
            width: 50%;
        }

        label {
            font-size: ${fontSizes.small};
        }

        textarea, input {
            padding: 0.75rem;
            margin-bottom: 1rem;
            width: 100%;
            border-radius: 0.5rem;
            border: 3px solid rgba(0,0,0,0);

            &:active,
            &:focus {
                border: 3px solid ${colors.primary};
                outline: none;
            }

            &:hover {
                border: 3px solid ${colors.darkGrey};
            }
        }

        textarea {
            display: block;
            resize: none;
            height: 10rem;
        }

        button {
            width: 50%;
            margin: 0 auto;
            padding: 0.75rem;
            border: 3px solid ${colors.asset};
            border-radius: 0.5rem;
            font-size: ${fontSizes.medium};
            color: ${colors.asset};
            background-color: ${colors.primary};
            font-weight: 700;
            text-transform: uppercase;
            transition: color 0.3s ease, background-color 0.3s ease;

            &:active,
            &:focus,
            &:hover {
                background-color: ${colors.asset};
                color: ${colors.almostBlack};
                outline: none;
            }
        }
    }
`

export default EmailForm
