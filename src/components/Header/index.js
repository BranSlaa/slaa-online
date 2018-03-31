import Header from './Header';

import styled, { injectGlobal } from 'styled-components';
import { color } from '../../global';

injectGlobal`
    .nav {
        position: absolute;
        z-index: 2;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;
        padding: 1rem 20%;
        transition: all 0.3s ease-in-out;

        &.isScrolling {
            position: fixed;
            background-color: ${color.primary};
            box-shadow: 0 3px 0.75rem 0 ${color.almostBlack};
        }
    }
`;

export default Header;
