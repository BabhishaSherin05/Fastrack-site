import React from 'react'
import tre1 from '../assets/pictures/Practice/tre1.webp'
import tree2 from '../assets/pictures/Practice/tree2.webp'
import tree3 from '../assets/pictures/Practice/tree3.webp'
import tree4 from '../assets/pictures/Practice/tree4.webp'
import { Link } from 'react-router-dom'


const Cards2 = () => {
  return (

      <div className="ms-5 mt-3">
            <p className="h5">TRENDING</p>
            <div className="row row-cols-1 row-cols-md-4 g-4 px-4 mx-4 py-3 mt-2">
      
              
              <div className="col">
                <a className="nav-link" href="#">
                  <div className="card h-100">
                    <Link to="/Open1" className="nav-link2"><img src={tre1} className="card-img-top" alt="..." /></Link>
                    
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
                        <Link to="/Open2" className="nav-link2"><img src={tree2} className="card-img-top" alt="..." /></Link>
                    
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
                   <Link to="/Open3" className="nav-link2"><img src={tree3} className="card-img-top" alt="..." /></Link>
                    
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
                   <Link to="/Open4" className="nav-link2"><img src={tree4} className="card-img-top" alt="..." /></Link>
                    
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
  )
}

export default Cards2
