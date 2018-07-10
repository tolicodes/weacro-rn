import React from 'react';
import { PropTypes } from 'prop-types';

import Menu from './Menu';

const COLOR_MAP = {
  All: 'black',
  Easy: 'green',
  Intermediate: 'blue',
  Hard: 'red',
  Expert: 'purple',
};

const DIFFICULTIES = [
  'All',
  'Easy',
  'Intermediate',
  'Hard',
  'Expert',
];

const Difficulty = ({ difficulty, setDifficulty }) => (
  <Menu
    icon="filter"
    selectedValue={difficulty}
    color={COLOR_MAP[difficulty]}
    listItems={DIFFICULTIES}
    setAction={setDifficulty}
  />
);

Difficulty.propTypes = {
  difficulty: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
};

export default Difficulty;
