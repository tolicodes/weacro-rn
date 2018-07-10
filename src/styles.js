import styled from 'styled-components';
import { Text as RNText } from 'react-native';

const { APP_IS_NATIVE } = process.env;

export const Text = APP_IS_NATIVE
    ? RNText
    : span;

export const normalize = (css) => (
    APP_IS_NATIVE
        ? styled.View`${css}`
        : styled.div`${css}`
)