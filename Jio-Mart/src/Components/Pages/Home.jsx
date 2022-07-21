import React from 'react'
import Advertisement from '../Landing page/Advertisement'
import Advertisement_1 from '../Landing page/Advertisement_1'
import ShopFromTop from '../Landing page/ShopFromTop'
import Slider_1 from '../Landing page/Slider_1'
import TopDeals from '../Landing page/TopDeals'
import style from '../Styles/home.css'

const Home = () => {
  return (
    <div className='home'>
        <Slider_1 />
        <Advertisement />
        <ShopFromTop />
        <Advertisement_1 />
        <TopDeals />
    </div>
  )
}

export default Home