import React from 'react'
import w1 from '../assets/pictures/Practice/w1.webp'
import viewed2 from '../assets/pictures/Practice/viewed2.webp'
import viewed3 from '../assets/pictures/Practice/viewed3.webp'
import viewed from '../assets/pictures/Practice/viewed.webp'
import Navbar from '../components/Navbar'
import Location from '../components/location'
import {Link} from "react-router-dom"
const Street1 = () => {
  return (
    <div>
      <Navbar/>
      <Location/>
    <div className='sale'>
      <Link to="/" className='one'>Home</Link><b> <i class="bi bi-chevron-double-right"></i> Street</b>
    <hr/>
         <p>21 items found for <b>"Streetwear Sports Watches "</b></p>
    <hr/>
    
<div className="ms-5 mt-3">
    <div className="row row-cols-1 row-cols-md-4 g-4 px-4 mx-4 py-3 mt-2">
    
                                       <div className="col">
                                         <a className="nav-link" href="#">
                                           <div className="card h-100">
                                             <img src={w1} className="card-img-top" alt="..." />
                                             <div className="card-body">
                                               <p className="card-text">
                                                 <b>Fastrack Thor Quartz Multifunction<br />Red Dial Metal Strap Watc...</b><br />
                                               Guys Watches<br />
                                               <b>Rs 3895</b> <del>Rs 5195</del> <span className="text-danger">25% off</span>
                                               </p>
                                             </div>
                                           </div>
                                         </a>
                                       </div>
                               
                                       
                                       <div className="col">
                                         <a className="nav-link" href="#">
                                           <div className="card h-100">
                                             <img src={viewed2} className="card-img-top" alt="..." />
                                             <div className="card-body">
                                               <p className="card-text">
                                                 <b>Fastrack Vyb Maverick Quartz Analog<br />Brown Dial Metal Strap W...</b><br />
                                               Guys Watches<br />
                                               <b>Rs 1895</b> <del>Rs 2705</del> <span className="text-danger">30% off</span>
                                               </p>
                                             </div>
                                           </div>
                                         </a>
                                       </div>
                               
                                       
                                       <div className="col">
                                         <div className="card h-100">
                                           <img src={viewed3} className="card-img-top" alt="..."/>
                                           <div className="card-body">
                                             <p className="card-text">
                                               <b>Fastrack Quartz Analog Black Dial<br />Black Stainless Steel Stra...</b><br />
                                               Guys Watches<br />
                                               <b>Rs 2555</b> <del>Rs 3195</del> <span className="text-danger">20% off</span>
                                             </p>
                                           </div>
                                         </div>
                                       </div>
                               
                                       
                                       <div className="col">
                                         <div className="card h-10">
                                           <img src={viewed} className="card-img-top" alt="..."/>
                                           <div className="card-body">
                                             <p className="card-text">
                                             <b>Fastrack Automatics Green Dial Silver<br />Metal Strap Automatic...</b><br />
                                                 Guys Watches<br />
                                                 <b>Rs 11,995</b>
                                             </p>
                                           </div>
                                         </div>
                                        </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Street1
