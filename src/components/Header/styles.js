import styled, { css } from 'styled-components';
import { Text as RNText } from 'react-native';

const { APP_IS_NATIVE } = process.env;

const normalize = (css) => (
    APP_IS_NATIVE
        ? styled.View`${css}`
        : styled.div`${css}`
)

export const Wrapper = normalize(css`
    display: flex;
    border: 1px solid gray; 
`);