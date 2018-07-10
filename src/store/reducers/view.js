import * as actionTypes from '../actions';
import { updateObject } from '../utility';

const initialState = {
  difficulty: 'All',
  tag: '',
  currentSlide: 0,
  device: 'Portrait',
  name: '',
};

export default (state = initialState, action) => {
  const {
    type, difficulty, tag, currentSlide, device, name,
  } = action;
  const {
    FILTER_DIFFICULTY, SET_TAG, SET_SLIDE_INDEX, SET_VIEW, FILTER_BY_NAME,
  } = actionTypes;
  let setState;
  switch (type) {
    case SET_TAG:
      setState = { tag, currentSlide };
      return updateObject(state, setState);
    case FILTER_DIFFICULTY:
      console.log(difficulty);
      setState = { difficulty, currentSlide };
      return updateObject(state, setState);
    case SET_SLIDE_INDEX:
      setState = { currentSlide };
      return updateObject(state, setState);
    case SET_VIEW:
      setState = { device };
      return updateObject(state, setState);
    case FILTER_BY_NAME:
      setState = { name };
      return updateObject(state, setState);
    default:
  }
  return state;
};
