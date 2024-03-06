import landRover from "../images/landroverlogo.webp"
import corvetteLogo from "../images/corvettelogo.png"


function LogoSection() {
    return (
        <div className="App">
          <div className="logoheader">
            <br />
            <h2>GET YOUR DREAM LOGO OUT OF YOUR HEAD AND ON TO THE ROAD</h2>
            <br />
            <div className='logosection'>
            <div className='logobox' >
                   <img src={landRover} alt="Land Rover" />
                   <img src={corvetteLogo} alt="Corvette" />
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />
                   <img src="" alt="" />

                  </div>
             
            </div>
          </div>
        
        </div>
      );
}

export default LogoSection;
