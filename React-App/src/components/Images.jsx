import React from 'react'
import Analog from '../assets/pictures/Practice/analog.webp'
import Smart from '../assets/pictures/Practice/smart.webp'
import Bags from '../assets/pictures/Practice/bags.jpg'
import Perfumes from '../assets/pictures/Practice/Perfumes.webp'
import { Link } from 'react-router-dom'

const images = () => {
  return (

<div className="ms-5">
    <p class="h5 ms-1 mt-3 text-align-end style-vertical">FASTRACK CATEGORIES</p>
  <div className="position-relative d-inline-block me-5 ms-5 mt-4 ">
    <Link to="/AnalogWatches" className="nav-link2"><img src={Analog} className="img-fluid rounded-3 MT-1 img"  alt="Casual"/></Link>
    <div className="position-absolute bottom-0 start-0 w-100 text-center text-BLACK  bg-opacity-50 p-2">
      <div className="mb-0">ANALOG WATCHES</div>
      </div>
    
  </div>
  <div className="position-relative d-inline-block me-3 ms-3 mt-4 ">
        <Link to="/SmartWatches1" className="nav-link2"><img src={Smart} className="img-fluid rounded-3 MT-1 img" alt="Casual"/></Link>
    
  <div className="position-absolute bottom-0 start-0 w-100 text-center text-white  bg-opacity-50 p-2">
      <div className="mb-0">SMART WATCHES</div>
      </div>

  </div>
  <div className="position-relative d-inline-block me-5 ms-5 mt-4">
    <Link to="/Bags1" className="nav-link2"><img src={Bags} className="img-fluid rounded-3 MT-1 img" alt="Casual"/></Link>
  
   <div className="position-absolute bottom-0 start-0 w-100 text-center text-BLACK  bg-opacity-50 p-2">
      <div className="mb-0">BAGS</div>
      </div>
    </div>
  <div className="position-relative d-inline-block me-3 ms-3 mt-4 ">
    <Link to="/Perfumes" className="nav-link2"><img src={Perfumes} className="img-fluid rounded-3 MT-1 img"  alt="Casual"/></Link>
    
<div className="position-absolute bottom-0 start-0 w-100 text-center text-white  bg-opacity-50 p-2">
      <div className="mb-0">PERFUMES</div>
      </div>

  </div>
</div>
  )
}

export default images
