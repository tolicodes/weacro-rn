import styled from 'styled-components';

const Menu = styled.View``;
const Icon = styled.View``;

export const Header = styled(Menu).attrs({
  size: 'huge',
  fluid: true,
  as: 'nav',
})`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    border: 1px solid gray;
`;

export const MenuItem = styled.View`
    cursor: default;
`;

export const TagsIcon = styled(Icon).attrs({
  name: 'tags',
  size: 'big',
  style: { opacity: '0.2' },
})``;