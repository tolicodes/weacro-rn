import React from 'react';
import { Menu } from 'semantic-ui-react';
import { HomeIcon, AboutIcon } from './styled';

function HomeButton({ history }) {
  return (
    <Menu.Item
      link
      onClick={() => {
        history.push('/');
      }}
    >
      <HomeIcon />
        Home page
    </Menu.Item>
  );
}

function AboutUs({ history }) {
  return (
    <Menu.Item
      link
      onClick={() => {
        history.push('/about');
      }}
    >
      <AboutIcon />
      About Us
    </Menu.Item>
  );
}

export { AboutUs, HomeButton };
