import React, {useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import slide1 from "../images/slide1.jpg"
import slide2 from "../images/slide2.jpg"
import slide3 from "../images/slide2.webp"
import slide4 from "../images/slide3.webp"
import slide5 from "../images/slide4.jpg"
import "./Carousel.css"


function Carousel(){
   const[settings] = useState({
    dots:true,
    infinite: true,
    speed:500,
    slideToShow: 1,
    slideToScroll:1,
    autoplay:true,
    autoplaySpeed:5000

   });
   return(
    <Slider {...settings}>
       
        <div>
            <img src={slide1} alt="slide1"/>
        </div>
        <div>
            <img src={slide2} alt="slide2"/>
        </div>
        <div>
            <img src={slide3} alt="slide3"/>
        </div>
        <div>
            <img src={slide4} alt="slide4"/>
        </div>
        <div>
            <img src={slide5} alt="slide5"/>
        </div>
       
    </Slider>
   )
}

export default Carousel