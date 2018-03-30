import '../styles/reset.scss'
import '../styles/font.scss'

import styled, { injectGlobal } from 'styled-components'
import { colors, typography } from '../global'

injectGlobal`
  body {
    background-color: ${colors.almostBlack};
    color: ${colors.almostWhite};
    font-family: ${typography.primary};
  }

  .main {
    margin: 0 auto;
    width: 80vw;
  }

  h1 {
    font-family: ${typography.primary};
    color: ${colors.almostWhite};
  }

  p {
    color: ${colors.almostWhite};
  }

  .heroContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 8rem 0;
  }
`
