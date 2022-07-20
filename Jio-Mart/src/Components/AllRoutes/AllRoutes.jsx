import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from '../Pages/Cart'
import Home from '../Pages/Home'
import Signin from '../Pages/Signin'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
    </div>
  )
}

export default AllRoutes