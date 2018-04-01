/**
 * Copyright (c) 2018-present, Brandon Slaa
 */
import ButtonLink from './ButtonLink';
import styled, { injectGlobal } from 'styled-components';
import { color, fontSize } from '../../global';

injectGlobal`
.button {

    margin: 1rem auto 3rem;
    padding: 0.75rem 1.5rem;
    border: 3px solid ${color.secondaryLight};
    border-radius: 0.5rem;
    font-size: ${fontSize.medium};
    color: ${color.almostBlack};
    background-color: ${color.primary};
    font-weight: 700;
    text-transform: uppercase;
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;

    &:active,
    &:focus,
    &:hover {
        background: none;
        color: ${color.almostWhite};
        border-color: ${color.primaryDark};
        outline: none;
        text-decoration: none;
    }
}
`;
export default ButtonLink;
