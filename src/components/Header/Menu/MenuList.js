import React from 'react';

import { PropTypes } from 'prop-types';
import { MenuItem, MenuList } from '../styles';
import { Text, Button } from '../../../styles';

const MenuListComponent = ({
  listItems, selectedValue, setAction, isOpen,
}) => (
  <MenuListComponent isOpen={isOpen}>
    {console.log(listItems) && listItems.map(item => console.log(item) && (
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
  </MenuListComponent>
);

MenuListComponent.propTypes = {
  selectedValue: PropTypes.string.isRequired,
  setAction: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MenuListComponent;
