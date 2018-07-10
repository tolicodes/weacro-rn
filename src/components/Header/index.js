import React, { Fragment } from 'react';
import styled from 'styled-components';
import toView from '../../utils/toView';

const Wrapper = styled.View`
    display: flex;
    border: 1px solid gray; 
`;
Wrapper.displayName = 'Wrapper';

const RV = toView(
    Wrapper
);

console.log(RV.StyledNativeComponent.displayName)

export default (isReactNative = true) => (
    isReactNative
        ? (
            <Wrapper/>
        )
        : (
            <Wrapper/>
        )       
);