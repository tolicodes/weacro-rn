import styled from 'styled-components';
import { Text as RNText } from 'react-native';

const { APP_IS_NATIVE } = process.env;

export const Text = APP_IS_NATIVE
  ? RNText
  : span;

export const Button = APP_IS_NATIVE
  ? styled.TouchableHighlight``
  : button;

export const normalize = css => (
  APP_IS_NATIVE
    ? styled.View`${css}`
    : styled.div`${css}`
);
