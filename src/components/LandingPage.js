import LogoSection from "./LogoSection";
import Carousel from "./Carousel";
//since the images are locally sourced
// import image1 from './images/ladyincar.jpg'
// import image2 from './images/showroom1.jpg'
// import image3 from './images/showroom2.png'
// import image4 from './images/showroom3.webp'
// import image5 from './images/showroom4.jpg'

function LandingPage(){
    // const image = [image1,image2,image3,image4,image5]
    return(
        <div className ="landingpage">
             {/* <Carousel image={image} /> */}
            <LogoSection />
           
        </div>
    )
}

export default LandingPage