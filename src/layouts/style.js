import "../styles/reset.scss";
import "../styles/font.scss";

import styled, { injectGlobal } from "styled-components";
import { color, typography, fontSize, mediaQuery } from "../global";

injectGlobal`
  body {
    background-color: ${color.almostBlack};
    color: ${color.almostWhite};
    font-family: ${typography.primary};
  }

  .main {
    margin: 0 auto;
    width: 80vw;
  }

  h1 {
    font-family: ${typography.primary};
    color: ${color.almostWhite};
  }

  p {
    color: ${color.almostWhite};
  }

  .heroContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 8rem 0;
  }

  .contactForm {
        display: flex;
        flex-direction: column;
        width: 90%;
        margin: 0 auto;

        @media (${mediaQuery.medium}) {
            width: 50%;
        }

        label {
            font-size: ${fontSize.small};
        }

        textarea, input {
            padding: 0.75rem;
            margin-bottom: 1rem;
            width: 100%;
            border-radius: 0.5rem;
            border: 3px solid rgba(0,0,0,0);
            transition: border 0.3s ease;

            &:active,
            &:focus {
                border: 3px solid ${color.primary};
                outline: none;
            }

            &:hover {
                border: 3px solid ${color.darkGrey};
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
            border: 3px solid ${color.asset};
            border-radius: 0.5rem;
            font-size: ${fontSize.medium};
            color: ${color.asset};
            background-color: ${color.primary};
            font-weight: 700;
            text-transform: uppercase;
            transition: color 0.3s ease, background-color 0.3s ease;

            &:active,
            &:focus,
            &:hover {
                background-color: ${color.asset};
                color: ${color.almostBlack};
                outline: none;
            }
        }
    }
`;
