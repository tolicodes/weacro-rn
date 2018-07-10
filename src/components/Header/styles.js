import { css } from 'styled-components';
import { normalize } from '../../styles';

export const Header = normalize(css`
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    border: 1px lightgray;
`);

export const Menu = normalize(css`
    display: flex;
    width: 50px;
    height: 100%;

    justify-content: center;
    align-items: center;

    border-right-color: lightgray;
    border-right-width: 1px;

    position: relative;

    ${({ isOpen }) => isOpen && css`
        background-color: lightgray;
    `}
`);

export const MenuList = normalize(css`
    position: absolute;
    top: 100%;
    left: 0;

    width: 150px;
    z-index: 2;
    border-radius: 2px;
    background-color: white;
    border: 1px solid lightgray;

    ${({ isOpen }) => !isOpen && css`
        display: none;
    `}
`);

export const MenuItem = normalize(css`
    padding: 10px;
    border-top-color: black;
    padding: 10px;

    ${({ active }) => active && css`
        background-color: lightgray;
    `}
`);
