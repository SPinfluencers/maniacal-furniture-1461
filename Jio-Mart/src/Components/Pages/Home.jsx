import React from 'react'
import Advertisement from '../Landing page/Advertisement'
import ShopFromTop from '../Landing page/ShopFromTop'
import Slider_1 from '../Landing page/Slider_1'
import style from '../Styles/home.css'

const Home = () => {
  return (
    <div className='home'>
        <Slider_1 />
        <Advertisement />
        <ShopFromTop />
    </div>
  )
}

export default Home