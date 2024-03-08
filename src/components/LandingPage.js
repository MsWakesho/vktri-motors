import LogoSection from "./LogoSection";
import Footer from "./Footer";
import Carousel from "./Carousel";
//since the images are locally sourced


function LandingPage(){
   
    return(
        <div className ="landingpage">
             <Carousel />
            <LogoSection />
            <Footer/>
           
           
        </div>
    )
}

export default LandingPage