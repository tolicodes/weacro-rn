import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PropTypes } from 'prop-types';

import { Menu as MenuStyle } from '../styles';
import MenuList from './MenuList';

export default class Menu extends Component {
  static propTypes = {
    selectedValue: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.string,
    setAction: PropTypes.func.isRequired,
    listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  static defaultProps = {
    iconColor: 'black',
  }

  constructor() {
    super();
    this.toggleList = this.toggleList.bind(this);
  }

  state = {
    isOpen: false,
  }

  toggleList() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const {
      selectedValue, icon, iconColor, setAction, listItems,
    } = this.props;
    const { isOpen } = this.state;
    return (
      <MenuStyle
        isOpen={isOpen}
        selectedValue={selectedValue}
        icon={icon}
        iconColor={iconColor}
      >
        <Icon
          name={icon}
          size={30}
          color={iconColor}
          onPress={this.toggleList}
        />
        <MenuList
          isOpen={isOpen}
          selectedValue={selectedValue}
          setAction={setAction}
          listItems={listItems}
        />
      </MenuStyle>
    );
  }
}
