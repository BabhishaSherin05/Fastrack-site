import React from 'react'
import Casual from '../assets/pictures/Practice/casual.webp'
import Party from '../assets/pictures/Practice/party.webp'
import Street from '../assets/pictures/Practice/street.webp'
import { Link } from 'react-router-dom'
const Vibe = () => {
  return (
    <div>
      <div className="ms-5 mb-3">
          <p class="h3 ms-3 mt-5">SHOP YOUR VIBE</p>
            <div class="mx-5"></div>
        <div className="position-relative d-inline-block me-5 ms-5 mt-4 ">
          <Link to="/Shop" className="nav-link2"><img src={Casual} className="img-fluid rounded-3 MT-1 omg"  alt="Casual"/></Link>
          
          <div className="position-absolute bottom-0 start-0 w-100 text-center text-white bg-dark  bg-opacity-50 p-2">
            <div className="mb-0">ELEVATED CASUAL</div>
            </div>
          
        </div>
        <div className="position-relative d-inline-block me-5 ms-5 mt-4 ">
          <Link to="/Party1" className="nav-link2"><img src={Party} className="img-fluid rounded-3 MT-1 omg" alt="Casual"/></Link>
        
        <div className="position-absolute bottom-0 start-0 w-100 text-center text-white bg-dark bg-opacity-50 p-2">
            <div className="mb-0">PARTY</div>
            </div>
      
        </div>
        <div className="position-relative d-inline-block me-5 ms-5 mt-4">
          <Link to="/Street1" className="nav-link2"><img src={Street} className="img-fluid rounded-3 MT-1 omg" alt="Casual"/></Link>
      
         <div className="position-absolute bottom-0 start-0 w-100 text-center text-white bg-dark  bg-opacity-50 p-2">
            <div className="mb-0">STREET</div>
            </div>
          </div>
      
        </div>
      </div>

  )
}

export default Vibe
