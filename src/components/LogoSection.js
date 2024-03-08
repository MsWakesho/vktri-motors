import landRover from "../images/landroverlogo.webp"
import corvetteLogo from "../images/corvettelogo.png"
import jaguarLogo from "../images/jaguarlogo.png"
import peugeotLogo from "../images/peugeot.png"
import  mercedesLogoo from "../images/mercedeslogo.png"
import fordLogo from "../images/fordlogo.png"



function LogoSection() {
    return (
        <div className="App">
          <div className="logoheader">
            <br />
            <h2>GET YOUR DREAM LOGO OUT OF YOUR HEAD<br/>
                AND ON TO THE ROAD</h2>
            <br />
            <div className='logosection'>
            <div className='logobox' >
                   <img src={jaguarLogo} alt="Jaguar" class ="up" />
                   <img src={corvetteLogo} alt="Corvette"class ="down" />
                   <img src={fordLogo} alt="Ford" class ="up" />
                   <img src={mercedesLogoo} alt="Mercedes" class ="down" />
                   <img src={peugeotLogo} alt="Peugeot" class ="up"/>
                   <img src={landRover} alt="Land Rover" class = "down" />
             </div>
             
            </div>
          </div>

        
        
        </div>
      );
}

export default LogoSection;
