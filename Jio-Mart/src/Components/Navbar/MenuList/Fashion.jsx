import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button,
  } from '@chakra-ui/react'
  import { ChevronDownIcon } from '@chakra-ui/icons'

const Fashion = () => {
  return (
    <div>
    <Menu>
         <MenuButton backgroundColor='rgb(236,236,237)' as={Button} rightIcon={<ChevronDownIcon />}>
           Fashion
         </MenuButton>
        <MenuList color='black' backgroundColor='rgb(236,236,237)'>
            <MenuItem>Men</MenuItem>
            <MenuItem>Women</MenuItem>
            <MenuItem>Boys</MenuItem>
            <MenuItem>Girls</MenuItem>
            <MenuItem>Infants</MenuItem>
        </MenuList>
    </Menu>
    </div>
  )
}

export default Fashion