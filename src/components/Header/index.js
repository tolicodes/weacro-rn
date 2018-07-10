import { connect } from 'react-redux';
import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { doLogout } from '../Auth/actions';
import { setDifficulty } from '../../store/actions/actions';

import DifficultyMenu from './Difficulty';
// import Options from './OptionsMenu/OptionsMenu';
// import ProfileMenu from './ProfileMenu';
// import SearchBar from './SearchBar';
// import TagChoice from './TagChoice';

import { Header } from './styles';

const HeaderComponent = ({
  userName,
  difficulty,
  pathname,
  setDifficultyAction,
}) => (
  <Header>
    {
    pathname === '/' || pathname.includes('/pose/')
      ? (
        <DifficultyMenu difficulty={difficulty} setDifficulty={setDifficultyAction} />
      )
      : null
    }
    {/* <DifficultyMenu difficultySetting={difficulty} />
        <TagChoice loggedIn={userName} />
        <SearchBar />
        <Menu.Menu position="right">
            <ProfileMenu />
            <Options isUser={userName} />
        </Menu.Menu> */}
  </Header>
);

HeaderComponent.propTypes = {
  userName: PropTypes.string,
  difficulty: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  setDifficultyAction: PropTypes.func.isRequired,
};

HeaderComponent.defaultProps = {
  userName: null,
};

export default connect(
  ({
    view: {
      difficulty,
    },
    user: {
      name,
    },
    router: {
      location: {
        pathname,
      },
    },
  }) => ({
    difficulty,
    userName: name,
    pathname,
  }),

  dispatch => bindActionCreators({
    doLogout,
    setDifficultyAction: setDifficulty,
  }, dispatch),
)(HeaderComponent);
