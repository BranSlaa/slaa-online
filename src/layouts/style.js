import '../styles/reset.scss';
import '../styles/font.scss';

import styled, { injectGlobal } from 'styled-components';
import { color, typography, fontSize } from '../global';

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
    font-size: ${fontSize.xlarge};
    color: ${color.almostWhite};
  }

  p {
    color: ${color.almostWhite};
  }
`;
