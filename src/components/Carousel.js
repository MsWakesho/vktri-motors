import React, {useState} from 'react';
import slide1 from "../images/slide1.jpg"
import slide2
function Carousel({images}){
    const [currentIndex,setCurrentIndex]= useState(0);

    function nextSlide(){
        setCurrentIndex((prevIndex) =>(prevIndex === images.length - 1 ? 0 : prevIndex + 1));

    }

    function prevSlide(){
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.legth -1: prevIndex -1 ))
    };

    return(
        <div className ="carousel">
            <button onClick ={prevSlide}>Prev</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button onClick={nextSlide}>Next</button>
        </div>
    )
}

export default Carousel