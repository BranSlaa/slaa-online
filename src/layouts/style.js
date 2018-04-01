import '../styles/reset.scss';
import '../styles/font.scss';

import styled, { injectGlobal } from 'styled-components';
import { color, typography, fontSize } from '../global';

injectGlobal`
  body {
    background-color: ${color.almostBlack};
    color: ${color.almostWhite};
    font-family: ${typography.primary};
    min-width: 17.5rem;
  }

  .main {
    margin: 0 auto;
    width: 80vw;
  }

  h1 {
    font-family: ${typography.primary};
    font-size: 4rem;
    color: ${color.almostWhite};
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  h4 {
    font-size: 1.5rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: 0.5rem;
  }

  p {
    color: ${color.almostWhite};
  }
`;
