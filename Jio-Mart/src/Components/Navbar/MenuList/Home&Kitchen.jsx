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

const HomeKitchen = () => {
  return (
    <div>
    <Menu>
         <MenuButton backgroundColor='rgb(236,236,237)' as={Button} rightIcon={<ChevronDownIcon />}>
           Home & Kitchen
         </MenuButton>
        <MenuList color='black' backgroundColor='rgb(236,236,237)'>
            <MenuItem>Kitchenware</MenuItem>
            <MenuItem>Dining</MenuItem>
            <MenuItem>Furnishing</MenuItem>
            <MenuItem>Home Decor</MenuItem>
            <MenuItem>Furniture</MenuItem>
            <MenuItem>Toy, Games & Fitness</MenuItem>
            <MenuItem>Electrical</MenuItem>
            <MenuItem>Bathroom & Laundry Accessories</MenuItem>
            <MenuItem>Disposables</MenuItem>
        </MenuList>
    </Menu>
    </div>
  )
}

export default HomeKitchen