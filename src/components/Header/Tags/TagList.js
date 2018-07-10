import React from 'react';
import { Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { setTag } from '../../../../store/actions/actions';

const TagList = ({ tag, userLists, setTag }) => {
  const showFavorites = () => setTag('favorites', 0);
  const showAll = () => setTag('', 0);
  return userLists.map((list, i) => (
    <Menu.Item key={i} active={!!tag} name={list} onClick={!tag ? showFavorites : showAll}>
      <Icon name={!tag ? 'empty heart' : 'full heart'} />
Favorites
    </Menu.Item>
  ));
};
const mapStateToProps = (state) => {
  const { view: { tag }, user: { lists } } = state;
  const userLists = lists && Object.keys(lists);
  return { tag, userLists };
};
const mapDispatchToProps = dispatch => ({ setTag: (tag, currentSlide) => dispatch(setTag(tag, currentSlide)) });

export default connect(mapStateToProps, mapDispatchToProps)(TagList);
