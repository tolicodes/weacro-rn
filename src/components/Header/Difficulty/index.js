import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PropTypes } from 'prop-types';

import { Menu } from '../styles';
import DifficultyList from './DifficultyList';

const COLOR_MAP = {
  All: null,
  Easy: 'green',
  Intermediate: 'blue',
  Hard: 'red',
  Expert: 'purple',
};

export default class Difficulty extends Component {
  static propTypes = {
    difficultySetting: PropTypes.string.isRequired,
  }

  constructor() {
    super();
    this.toggleList = this.toggleList.bind(this);
  }

  state = {
    listOpen: false,
  }

  toggleList() {
    const { listOpen } = this.state;
    this.setState({
      listOpen: !listOpen,
    });
  }

  render() {
    const { difficultySetting } = this.props;
    const { listOpen } = this.state;
    return (
      <Menu isOpen={listOpen}>
        <Icon
          name="filter"
          size={30}
          color={COLOR_MAP[difficultySetting]}
          onPress={this.toggleList}
        />
        <DifficultyList isOpen={listOpen} />
      </Menu>
    );
  }
}
