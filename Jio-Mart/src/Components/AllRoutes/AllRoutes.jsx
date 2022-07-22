import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Boys from '../Pages/Boys'
import Cart from '../Pages/Cart'
import DairyAndBakery from '../Pages/DairyAndBakery'
import FruitsAndVegitable from '../Pages/FruitsAndVegitable'
import Girls from '../Pages/Girls'
import Home from '../Pages/Home'
import Mens from '../Pages/Mens'
import Signin from '../Pages/Signin'
import Womens from '../Pages/Womens'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/mens' element={<Mens />} />
          <Route path='/womens' element={<Womens />} />
          <Route path='/boys' element={<Boys />} />
          <Route path='/girls' element={<Girls />} />
          <Route path='/fruits&vegitables' element={<FruitsAndVegitable />} />
          <Route path='/dairy&bekery' element={<DairyAndBakery />} />
        </Routes>
    </div>
  )
}

export default AllRoutes