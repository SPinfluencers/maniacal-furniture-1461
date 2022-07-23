import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hair from '../Pages/Beauty/Hair'
import MakeUp from '../Pages/Beauty/MakeUp'
import Cart from '../Pages/Cart'
import MobileTablets from '../Pages/Electronics/MobileTablets'
import TvSpeaker from '../Pages/Electronics/TvSpeaker'
import Mens from '../Pages/Fashion/Mens'
import Womens from '../Pages/Fashion/Womens'
import Fruits_Vegitables from '../Pages/Groceries/Fruits_Vegitables'
import PremiumFruits from '../Pages/Groceries/PremiumFruits'
import Home from '../Pages/Home'
import Dining from '../Pages/Home&Kitchen/Dining'
import KitchWare from '../Pages/Home&Kitchen/KitchWare'
import Avocado from '../Pages/PremiumFruits/Avocado'
import Cherries from '../Pages/PremiumFruits/Cherries'
import Signin from '../Pages/Signin'


const AllRoutes = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/fruits&vegitables' element={<Fruits_Vegitables />} />
          <Route path='/avocado...' element={<Avocado />} />
          <Route path='/cherries...' element={<Cherries />} />
          <Route path='/dining' element={<Dining />} />
          <Route path='/kitchenware' element={<KitchWare />} />
          <Route path='/mens' element={<Mens />} />
          <Route path='/womens' element={<Womens />} />
          <Route path='/mobiletablets' element={<MobileTablets />} />
          <Route path='/tvspeakers' element={<TvSpeaker />} />
          <Route path='/makeup' element={<MakeUp />} />
          <Route path='/hair' element={<Hair />} />
        </Routes>
    </div>
  )
}

export default AllRoutes