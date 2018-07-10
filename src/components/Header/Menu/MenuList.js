import React from 'react';

import { PropTypes } from 'prop-types';
import { MenuItem, MenuList } from '../styles';
import { Text, Button } from '../../../styles';

const MenuListComponent = ({
  listItems, selectedValue, setAction, isOpen,
}) => (
  <MenuList isOpen={isOpen}>
    {listItems.map(item => (
      <Button
        onPress={() => setAction(item, 0)}
        key={item}
      >
        <MenuItem
          active={selectedValue === item}
        >
          <Text>
            {item}
          </Text>
        </MenuItem>
      </Button>
    ))}
  </MenuList>
);

MenuListComponent.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setAction: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MenuListComponent;
