import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { PropTypes } from 'prop-types';
import { setDifficulty as setDifficultyAction } from '../../../store/actions/actions';
import { MenuItem, MenuList } from '../styles';
import { Text, Button } from '../../../styles';

const difficulties = [
  'All',
  'Easy',
  'Intermediate',
  'Hard',
  'Expert',
];

const DifficultyList = ({ difficultySetting, setDifficulty, isOpen }) => (
  <MenuList isOpen={isOpen}>
    {difficulties.map(difficulty => (
      <Button
        onPress={() => setDifficulty(difficulty, 0)}
        key={difficulty}
      >
        <MenuItem
          key={difficulty}
          name={difficulty}
          active={difficultySetting === difficulty}
        >
          <Text>
            {difficulty}
          </Text>
        </MenuItem>
      </Button>
    ))}
  </MenuList>
);

DifficultyList.propTypes = {
  difficultySetting: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default connect(
  ({
    view: {
      difficulty,
    },
  }) => ({
    difficultySetting: difficulty,
  }),

  dispatch => bindActionCreators({
    setDifficulty: setDifficultyAction,
  }, dispatch),
)(DifficultyList);
