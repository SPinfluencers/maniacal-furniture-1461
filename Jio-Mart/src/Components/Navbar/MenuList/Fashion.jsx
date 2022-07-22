import React from 'react'
import { Link, NavLink, Routes } from 'react-router-dom'
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
import Mens from '../../Pages/Mens'

const Fashion = () => {
  return (
    <div>
    <Menu>
         <MenuButton backgroundColor='rgb(236,236,237)' as={Button} rightIcon={<ChevronDownIcon />}>
           Fashion
         </MenuButton>
        <MenuList color='black' backgroundColor='rgb(236,236,237)'>
          <MenuItem>
            <NavLink to='/mens'>
              Mens
            </NavLink>    
          </MenuItem>
            <MenuItem>
            <NavLink to='/womens'>
              Womens
            </NavLink> 
            </MenuItem>
            <MenuItem>
            <NavLink to='/boys'>
              Boys
            </NavLink>  
            </MenuItem>
            <MenuItem>
            <NavLink to='/girls'>
              Girls
            </NavLink> 
            </MenuItem>
            <MenuItem>Infants</MenuItem>
        </MenuList>
    </Menu>
    </div>
  )
}

export default Fashion