import React from 'react'
import App1 from '../assets/pictures/Practice/app1.jpg' 
import App2 from '../assets/pictures/Practice/app2.jpg'
import Logo from '../assets/pictures/Practice/fastracklogo.png'

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-2">
      <div className=" text-start ms-4">
        <div className="row">
          <div className='col-3 '>
             <img src={Logo}/>
                           <div className="row text-center">
                {["facebook", "instagram", "twitter-x", "youtube"].map((icon, i) => (
                  <div className="col-md-2" key={i}>
                    <a href="#" className="nav-link1"><i className={`bi bi-${icon}`}></i></a>
                  </div>
                ))}
              </div>
          </div>

          
          <div className="col-2">
            <h6>CUSTOMER SERVICE</h6>
            <div className="text-start text-light my-4">
              {[
                "Payment Options", "Track Order", "Find a Store" ,"Encircle Program"
              ].map((item, index) => (
                <a href="#" key={index} className="nav-link1"><p>{item}</p></a>
              ))}
            </div>
          </div>

          
          <div className="col-2">
            <h6>CONTACT US</h6>
            <div className="text-start text-light my-4">
              {[
                "1800-266-0123", "customercare@titan.co.in",  "FAQs"
              ].map((item, index) => (
                <a href="#" key={index} className="nav-link1"><p>{item}</p></a>
              ))}
            </div>
          </div>

          
          <div className="col-2">
            <h6>POLICIES</h6>
            <div className="text-start my-4">
              {[
                "Brand Protection", "Cancellation", "Shipping", "Warranty"
              ].map((item, index) => (
                <a href="#" key={index} className="nav-link1"><p>{item}</p></a>
              ))}
            </div>
          </div>

          
          <div className="col-3">
            <h6>DOWNLOAD THE TITAN APP</h6>
      
              <div className="row">
                <div className="col-auto">
                  <a href="#" className="nav-link1">
                    <img src={App1} alt="app store" className="img-fluid my-2" style={{ maxWidth: '150px' }} />
                  </a>
                </div>
                <div className="col-auto">
                  <a href="#" className="nav-link1">
                    <img src={App2} alt="play store" className="img-fluid my-2" style={{ maxWidth: '150px' }} />
                  </a>
                </div>
              </div>
              <div className="text-start mt-3">
                <h6>ABOUT FASTRACK</h6>
              </div>
              <div className="text-start my-4">
              {[
                "About Us", "Help and Contact", "Careers",
              ].map((item, index) => (
                <a href="#" key={index} className="nav-link1"><p>{item}</p></a>
              ))}
            </div>
              <div>
                  <p className='h6'>NEED HELP?</p>
                <a href="#" className="nav-link d-inline ">Chat with us on <a href="#" className="nav-link1 d-inline"/><u>Whatsapp</u></a>
              </div>
            </div>
          
        </div>

        
          <div className="row">
            <div className="col text-center">
              <p>© 2025 All Rights Reserved</p>
            </div>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;