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

const Electronics = () => {
  return (
    <div>
    <Menu>
         <MenuButton backgroundColor='rgb(236,236,237)' as={Button} rightIcon={<ChevronDownIcon />}>
         Electronics
         </MenuButton>
        <MenuList color='black' backgroundColor='rgb(236,236,237)'>
            <MenuItem>Mobile & Tablets</MenuItem>
            <MenuItem>TV & Speaker</MenuItem>
            <MenuItem>Home Appliances</MenuItem>
            <MenuItem>Computers</MenuItem>
            <MenuItem>Cameras</MenuItem>
            <MenuItem>Personal Care & Grooming</MenuItem>
            <MenuItem>Smart Devices</MenuItem>
            <MenuItem>Gaming</MenuItem>
            <MenuItem>Accessories</MenuItem>
            <MenuItem>Office Products</MenuItem>
            <MenuItem>Health Care Devices</MenuItem>
        </MenuList>
    </Menu>
    </div>
  )
}

export default Electronics