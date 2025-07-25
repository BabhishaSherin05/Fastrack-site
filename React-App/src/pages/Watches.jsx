import React from 'react'
import tre1 from '../assets/pictures/Practice/tre1.webp'
import tre2 from '../assets/pictures/Practice/tre2.webp'
import tre3 from '../assets/pictures/Practice/tre3.webp'
import tre4 from '../assets/pictures/Practice/tre4.webp'
import w1 from '../assets/pictures/Practice/w1.webp'
import w2 from '../assets/pictures/Practice/w2.webp'
import w3 from '../assets/pictures/Practice/w3.webp'
import w4 from '../assets/pictures/Practice/w4.webp'
import w21 from '../assets/pictures/Practice/2w1.webp'
import w22 from '../assets/pictures/Practice/2w2.webp'
import w24 from '../assets/pictures/Practice/2w4.webp'
import w25 from '../assets/pictures/Practice/2w5.webp'
import Navbar from '../components/Navbar'
import Location from '../components/location'
import {Link} from "react-router-dom"



function Watches() {
  return (
    <div>
      <Navbar/>
      <Location/>
    <div className='watch'>
            <Link to="/" className='one'>Home</Link><b> <i class="bi bi-chevron-double-right"></i> Watches</b>
        <hr/>
         <p >960 items found for<b> "WATCHES" </b></p>
      <hr/>
    

      <div className="ms-5 mt-3">
                  <div className="row row-cols-1 row-cols-md-4 g-4 px-4 mx-4 py-3 mt-2">
            
                  
                    <div className="col">
                      <a className="nav-link" href="#">
                        <div className="card h-100">
                          <img src={tre1} className="card-img-top" alt="..." />
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
                          <img src={tre2} className="card-img-top" alt="..." />
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
                        <img src={tre3} className="card-img-top" alt="..."/>
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
                        <img src={tre4} className="card-img-top" alt="..."/>
                        <div className="card-body">
                          <p className="card-text">
                          <b>Fastrack Automatics Green Dial Silver<br />Metal Strap Automatic...</b><br />
                              Guys Watches<br />
                              <b>Rs 11,995</b>
                          </p>
                        </div>
                      </div>
                    </div>
                                  
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
                                        <img src={w2} className="card-img-top" alt="..." />
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
                                      <img src={w3} className="card-img-top" alt="..."/>
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
                                      <img src={w4} className="card-img-top" alt="..."/>
                                      <div className="card-body">
                                        <p className="card-text">
                                        <b>Fastrack Automatics Green Dial Silver<br />Metal Strap Automatic...</b><br />
                                            Guys Watches<br />
                                            <b>Rs 11,995</b>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="col">
                                    <a className="nav-link" href="#">
                                      <div className="card h-100">
                                        <img src={w21} className="card-img-top" alt="..." />
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
                                        <img src={w22} className="card-img-top" alt="..." />
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
                                      <img src={w24} className="card-img-top" alt="..."/>
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
                                      <img src={w25} className="card-img-top" alt="..."/>
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

export default Watches
