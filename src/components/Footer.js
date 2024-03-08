import "./Footer.css"


function Footer(){
    return(
        <div  className="footerbox">
        <div className="footer1"> <h2>CARS</h2>
         <ul>
          <li>IN STOCK</li>
          <li>CLASSICAL CARS</li>
          <li>NEW ARRIVALS</li>

         </ul>
         </div>
         <div className="footer2">
            
                <h2>ABOUT US</h2>
                <h2>CONTACT US:</h2>
            
         </div>

         <div className="footer3">
            <ul></ul>
            <li>Tel: 02000000000</li>
            <li>Email: vktrimotors@gmail.com</li>
            <li>PO.BOX: VIKTRI020</li>
         </div>

         <div className="footer4">
            <h2>Office hours:</h2>
            <h3>9AM - 5:30PM</h3>
         </div>
       
      </div>
    );
}

export default Footer