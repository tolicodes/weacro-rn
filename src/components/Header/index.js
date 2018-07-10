import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import { bindActionCreators } from 'redux';

import { doLogout } from '../Auth/actions';
// import DifficultyMenu from './Difficulty';
// import Options from './OptionsMenu/OptionsMenu';
// import ProfileMenu from './ProfileMenu';
// import SearchBar from './SearchBar';
// import TagChoice from './TagChoice';

import { Header } from './styles';
import { Text } from '../../styles';

const HeaderComponent = ({ userName, difficulty, pathname }) => {
  console.log(pathname);
  return (
    <Header>
        <Text>I am a header</Text>
        {/* <DifficultyMenu difficultySetting={difficulty} />
        <TagChoice loggedIn={userName} />
        <SearchBar />
        <Menu.Menu position="right">
            <ProfileMenu />
            <Options isUser={userName} />
        </Menu.Menu> */}
    </Header>
  );
};

export default connect(
    ({  
        view: {
            difficulty
        },
        user: {
            name: userName 
        },
        router: {
            location: {
                pathname
            }
        }
    }) => ({ difficulty, userName, pathname }),

    dispatch => bindActionCreators({
        doLogout,
    }, dispatch),
)(HeaderComponent);
