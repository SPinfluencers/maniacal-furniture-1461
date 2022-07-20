import React from 'react';
import { Slide } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import style from '../Styles/slider.css'

const images = [
  "https://couponswala.com/blog/wp-content/uploads/2021/06/1591277055_m-below-mrp-1.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657918893_1655984372_MB_Banner_756-x-325.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657275762_cheese-banners_2.jpg",
  "https://www.jiomart.com/images/cms/aw_rbslider/slides/1657275762_cheese-banners_2.jpg",
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCoxZMEpyY7w44qVNn00yvPVRJ_XZtnDscxg&usqp=CAU',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1658245711_1657208677_1657206257_1656949673_1656689819_Detergent_756x325.jpg',
  'https://jiomartshop.com/wp-content/uploads/2020/01/jiomart.jpg',
  'https://www.jiomart.com/images/cms/aw_rbslider/slides/1656627002_Hair-Care.jpg',
  'https://www.jiomartexpress.com/images/cms/aw_rbslider/slides/1653975639_The-health-hygiene-store.jpg',
];


const Slider_1 = () => {
    return (
      <div  className="slide-container">
        <Slide>
          {
            images.map((each, index) => <img key={index} style={{width: "100%", height:'300px', paddingTop:'20px'}} src={each} />)
          }
        </Slide>
      </div>    
    )
}

export default Slider_1


