import CarLogos from './car.json';




function LogoSection() {
    return (
        <div className="App">
          <div className="logoheader">
            <br />
            <h2>GET YOUR DREAM LOGO OUT OF YOUR HEAD AND ON TO THE ROAD</h2>
            <br />
            <div className='logosection'>
              {
                CarLogos && CarLogos.carLogos.map((logo) => (
                  <div className='logobox' key={logo.id}>
                   <img src="" alt="" />
    
                    <br />
                    {logo.brand}
                  </div>
                ))}
            </div>
          </div>
        
        </div>
      );
}

export default LogoSection;
