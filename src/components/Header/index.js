import { connect } from 'react-redux';
import React from 'react';
import { bindActionCreators } from 'redux';

import { PropTypes } from 'prop-types';
import { doLogout } from '../Auth/actions';
import DifficultyMenu from './Difficulty';
// import Options from './OptionsMenu/OptionsMenu';
// import ProfileMenu from './ProfileMenu';
// import SearchBar from './SearchBar';
// import TagChoice from './TagChoice';

import { Header } from './styles';
import { Text } from '../../styles';
import { setDifficulty } from '../../store/actions/actions';

const HeaderComponent = ({ userName, difficulty, pathname }) => (
  <Header>
    {
        pathname === '/' || pathname.includes('/pose/')
          ? (
            <DifficultyMenu
              difficulty={difficulty}
              setDifficulty={setDifficulty}
            />

            // <TagChoice loggedIn={userName} />
            // <SearchBar />

            // <Right>
            //   <ProfileMenu />
            //   <Options isUser={userName} />
            // </Right>
          ) : null
        }
  </Header>
);

HeaderComponent.defaultProps = {
  userName: null,
};

HeaderComponent.propTypes = {
  userName: PropTypes.string,
  difficulty: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default connect(
  ({
    view: {
      difficulty,
    },
    user: {
      name: userName,
    },
    router: {
      location: {
        pathname,
      },
    },
  }) => ({ difficulty, userName, pathname }),

  dispatch => bindActionCreators({
    doLogout,
    setDifficulty,
  }, dispatch),
)(HeaderComponent);
