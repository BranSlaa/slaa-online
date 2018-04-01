import Header from './Header';

import styled, { injectGlobal } from 'styled-components';
import { color, mediaQuery } from '../../global';

injectGlobal`
    .nav {
        position: absolute;
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        padding: 1rem 5%;
        transition: all 0.3s ease-in-out;

        @media (${mediaQuery.medium}) {
            padding-right: 10%;
            padding-left: 10%;
        }

        @media (${mediaQuery.large}) {
            padding-right: 20%;
            padding-left: 20%;
        }

        &.isScrolling {
            position: fixed;
            background-color: ${color.primaryDark};
            box-shadow: 0 3px 0.75rem 0 ${color.almostBlack};
        }
    }
`;

export default Header;
