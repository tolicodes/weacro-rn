import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { Orange } from '../../../UI/DeviceRules';

export const HomeIcon = styled(Icon).attrs({
  name: 'home',
})`
  color: black;
  `;
export const AboutIcon = styled(Icon).attrs({
  name: 'info circle',
  size: 'big',
})``;
export const UserIcon = styled(Icon).attrs({
  name: 'bars',
  size: 'big',
})`
    margin: '0 0.5vw'
    ${({ isUser }) => isUser && `color: ${Orange}`}
  `;
