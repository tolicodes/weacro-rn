import React from 'react';
import { MenuItem, TagsIcon } from './styles';
import TagMenu from './Tags';

function TagChoice({ loggedIn }) {
  if (loggedIn) { return <TagMenu />; }
  return (
    <MenuItem>
      <TagsIcon />
    </MenuItem>
  );
}

export default TagChoice;
