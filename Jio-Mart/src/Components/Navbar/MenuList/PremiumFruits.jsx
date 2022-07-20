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

const PremiumFruits= () => {
  return (
    <div>
    <Menu>
         <MenuButton backgroundColor='rgb(236,236,237)' as={Button} rightIcon={<ChevronDownIcon />}>
           Premium Fruits
         </MenuButton>
        <MenuList color='black' backgroundColor='rgb(236,236,237)'>
            <MenuItem>Avocado, Peach, plumm</MenuItem>
            <MenuItem>Cherries, Berries & Exotic Fruits</MenuItem>
            <MenuItem>Pomegranate, papaya & Pineapples Dats</MenuItem>
            <MenuItem>Citrus, Mango, & Graps</MenuItem>
            <MenuItem>Snacks & Branded Food</MenuItem>
            <MenuItem>Apples , Pears</MenuItem>
        </MenuList>
    </Menu>
    </div>
  )
}

export default PremiumFruits