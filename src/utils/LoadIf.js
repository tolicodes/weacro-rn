import React from 'react';
import Media from 'react-media';
import PropTypes from 'prop-types';
import { Desktop, PhonePortrait, PhoneLandscape } from './DeviceRules';

const DesktopMedia = ({ children }) => (
  <Media query={Desktop}>
    {children}
  </Media>
);

const LoadIf = {
  Desktop: DesktopMedia,
  Portrait: ({ children }) => (
    <Media query={PhonePortrait}>
      {children}
    </Media>
  ),
  notPortrait: ({ children }) => (
    <Media query={`not ${PhoneLandscape}`}>
      {children}
    </Media>
  ),
};

Desktop.PropTyps = {
  children: PropTypes.func.isRequired,
};

export default LoadIf;
