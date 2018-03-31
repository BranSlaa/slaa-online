/**
 * Copyright (c) 2018-present, Brandon Slaa
 */
import ButtonLink from './ButtonLink';
import styled, { injectGlobal } from 'styled-components';
import { color, fontSize } from '../../global';

injectGlobal`
.button {
    width: 50%;
    margin: 1rem auto 3rem;
    padding: 0.75rem;
    border: 3px solid ${color.secondaryLight};
    border-radius: 0.5rem;
    font-size: ${fontSize.medium};
    color: ${color.almostBlack};
    background-color: ${color.primary};
    font-weight: 700;
    text-transform: uppercase;
    transition: color 0.3s ease, background-color 0.3s ease;

    &:active,
    &:focus,
    &:hover {
        background-color: ${color.secondary};
        color: ${color.almostBlack};
        border-color: ${color.primaryDark};
        outline: none;
    }
}
`;
export default ButtonLink;
