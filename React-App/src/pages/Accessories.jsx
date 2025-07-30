import React from 'react'
import Acc1 from '../assets/pictures/Practice/Acc1.webp'
import Acc2 from '../assets/pictures/Practice/Acc2.webp'
import Acc3 from '../assets/pictures/Practice/Acc3.webp'
import Acc4 from '../assets/pictures/Practice/Acc4.webp'
import Acc5 from '../assets/pictures/Practice/Acc5.webp'
import Acc6 from '../assets/pictures/Practice/Acc6.webp'
import Acc7 from '../assets/pictures/Practice/Acc7.webp'
import Acc8 from '../assets/pictures/Practice/Acc8.webp'
import Acc9 from '../assets/pictures/Practice/Acc9.webp'
import Acc10 from '../assets/pictures/Practice/Acc10.webp'
import Acc11 from '../assets/pictures/Practice/Acc11.webp'
import Acc12 from '../assets/pictures/Practice/Acc12.webp'
import Navbar from '../components/Navbar'
import Location from '../components/Location'
import {Link} from "react-router-dom"

const Accessories = () => {
  return (
    <div>
      <Navbar/>
      <Location/>
    <div className='watch'>
      
      <Link to="/" className='one'>Home</Link><b> <i class="bi bi-chevron-double-right"></i> Accessories</b>
        <hr/>
         <p >196 items found for<b> "Accessories" </b></p>
      <hr/>
      
      <div className="ms-5 mt-3">
                  <div className="row row-cols-1 row-cols-md-4 g-4 px-4 mx-4 py-3 mt-2">
                               
                                <div className="col">
                                  <a className="nav-link" href="#">
                                    <div className="card h-100">
                                      <img src={Acc1} className="card-img-top" alt="..." />
                                      <div className="card-body">
                                        <p className="card-text">
                                          <b>Reflex Vox Classic Silicone<br />Straps</b><br />
                                        Unisex Smart Watch Strap<br />
                                        <b>Rs 525</b> <del>Rs 695</del> <span className="text-danger">24% off</span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                        
                                
                                <div className="col">
                                  <a className="nav-link" href="#">
                                    <div className="card h-100">
                                      <img src={Acc2} className="card-img-top" alt="..." />
                                      <div className="card-body">
                                        <p className="card-text">
                                          <b>Fastrack Messenger<br />Shoulder Bag In Black</b><br />
                            
                                        <b>Rs 1,498</b> <del>Rs 2,995</del> <span className="text-danger">50% off</span><br/>
                                        <button className='button'>+1 colors</button>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                        
                               
                                <div className="col">
                                  <div className="card h-100">
                                    <img src={Acc3} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                      <p className="card-text">
                                        <b>Trance 100 MI Perfume For<br />Guys</b><br />
                                        perfumes<br />
                                        <b>Rs 698</b> <del>Rs 895</del> <span className="text-danger">22% off</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                        
                                
                                <div className="col">
                                  <div className="card h-100">
                                    <img src={Acc4} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                      <p className="card-text">
                                      <b>Fastrack Solid Structured<br />Satachel In Blue</b><br />
                                          
                                          <b>Rs 2,695</b>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="col">
                                  <a className="nav-link" href="#">
                                    <div className="card h-100">
                                      <img src={Acc5} className="card-img-top" alt="..." />
                                      <div className="card-body">
                                        <p className="card-text">
                                          <b>Fastrack Chic Carry-All<br />Laptop Tote In Black</b><br />
                                        Guys Bags<br />
                                        <b>Rs 3,895</b> 
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                        
                               
                                <div className="col">
                                  <a className="nav-link" href="#">
                                    <div className="card h-100">
                                      <img src={Acc6} className="card-img-top" alt="..." />
                                      <div className="card-body">
                                        <p className="card-text">
                                          <b>Fastrack Smart Yellow<br />Silicone Bubble Strap 22...</b><br />
                                        Unisex Smart Watch Strap<br />
                                        <b>Rs 795</b> 
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                        

                                <div className="col">
                                  <div className="card h-100">
                                    <img src={Acc7} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                      <p className="card-text">
                                        <b>Beat 100 MI Perfume For<br /> Girls</b><br />
                                        
                                        <b>Rs 599</b> <del>Rs 895</del> <span className="text-danger">33% off</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                        
                                
                                <div className="col">
                                  <div className="card h-100">
                                    <img src={Acc8} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                      <p className="card-text">
                                      <b>Fastrack Ease Eau De<br />Parfum For Women-100 MI</b><br />
                                          
                                          <b>Rs 699</b><del>Rs 845</del> <span className="text-danger">17% off</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="col">
                                  <a className="nav-link" href="#">
                                    <div className="card h-100">
                                      <img src={Acc9} className="card-img-top" alt="..." />
                                      <div className="card-body">
                                        <p className="card-text">
                                          <b>Fastrack No Nasties<br />Perfume Spray Upbeat</b><br />
                                        Perfume Spray<br />
                                        <b>Rs 228</b> <del> Rs 285</del> <span className="text-danger">20% off</span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                        
                                
                                <div className="col">
                                  <a className="nav-link" href="#">
                                    <div className="card h-100">
                                      <img src={Acc10} className="card-img-top" alt="..." />
                                      <div className="card-body">
                                        <p className="card-text">
                                          <b>Fastrack HeartPop<br />Shoulder Bag,Made With...</b><br />
                                        Girl's Bag<br />
                                        <b>Rs 1747</b> <del>Rs 2495</del> <span className="text-danger">30% off</span>
                                        </p>
                                      </div>
                                    </div>
                                  </a>
                                </div>
                        
                                
                                <div className="col">
                                  <div className="card h-100">
                                    <img src={Acc11} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                      <p className="card-text">
                                        <b>Fastrack Gift Pack|Unisex|<br />50 MI X 2</b><br />
                                        Unisex Perfumes<br />
                                        <b>Rs 718</b> <del>Rs 845</del> <span className="text-danger">15% off</span>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                        
                                
                                <div className="col">
                                  <div className="card h-10">
                                    <img src={Acc12} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                      <p className="card-text">
                                      <b>Reflex Vox Classic Silicone<br />Straps</b><br />
                                          Unisex smart Watch Strap<br />
                                          <b>Rs 525</b><del>Rs 695</del> <span className="text-danger">24% off</span>
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

export default Accessories
