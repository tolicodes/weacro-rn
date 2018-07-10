import React from 'react';
import { css } from 'styled-components';

import Header from './Header';
import { normalize } from '../styles';

const Wrapper = normalize(css`
    margin-top: 30px;
`);

export default ({ children }) => (
    <Wrapper>
        <Header /> 
        { children }
    </Wrapper>       
)