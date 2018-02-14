import '../styles/reset.scss'

import styled, { injectGlobal } from 'styled-components'
import { colors } from '../global'

injectGlobal`
  body {
    background-color: ${colors.almostBlack};
  }
`
