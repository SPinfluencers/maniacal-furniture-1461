import React from 'react'
import { NavLink } from 'react-router-dom'
import JioLogo from '../Common/Icon/JioLogo'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <div>
        <NavLink to='/'><JioLogo /></NavLink>
        <SearchBar />
        <NavLink to='/signin'>Signin</NavLink>
        <NavLink to='/cart'>Cart</NavLink>
    </div>
  )
}

export default Navbar