import React from 'react'
import Acc2 from '../assets/pictures/Practice/Acc2.webp'
import Acc4 from '../assets/pictures/Practice/Acc4.webp'
import Acc5 from '../assets/pictures/Practice/Acc5.webp'
import Acc10 from '../assets/pictures/Practice/Acc10.webp'
import Navbar from '../components/Navbar'
import Location from '../components/location'
import {Link} from "react-router-dom"

const Bags1 = () => {
  return (
    <div>
      <Navbar/>
      <Location/>
    <div className='watch'>
      <Link to="/" className='one'>Home</Link><b> <i className="bi bi-chevron-double-right"></i>Bags</b>
            <hr/>
             <p >156 items found for<b> "Fastrack Bags for Girls " </b></p>
          <hr/>
        
          
          <div className="ms-5 mt-3">
                      <div className="row row-cols-1 row-cols-md-4 g-4 px-4 mx-4 py-3 mt-2">
                     
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
                                                             <img src={Acc4} className="card-img-top" alt="..." />
                                                             <div className="card-body">
                                                               <p className="card-text">
                                                                <b>Fastrack Solid Structured<br />Satachel In Blue</b><br />
                                                               Girl's Bags<br />
                                                               <b>Rs 2,695</b> 
                                                               </p>
                                                             </div>
                                                           </div>
                                                      
                                                       </div>
                                               
                                                      
                                                       <div className="col">
                                                         <div className="card h-100">
                                                           <img src={Acc5} className="card-img-top" alt="..."/>
                                                           <div className="card-body">
                                                             <p className="card-text">
                                                               <b>Fastrack Chic Carry-All<br />Laptop Tote In Black</b><br />
                                        
                                                               <b>Rs 3,895</b> <br/>
                                        <button className='button'>+1 colors</button>
                                                             </p>
                                                           </div>
                                                         </div>
                                                       </div>
                                               
                                                       
                                                       <div className="col">
                                                         <div className="card h-10">
                                                           <img src={Acc10} className="card-img-top" alt="..."/>
                                                           <div className="card-body">
                                                             <p className="card-text">
                                                             <b>Fastrack HeartPop<br />Shoulder Bag,Made With...</b><br />
                                        Girl's Bag<br />
                                        <b>Rs 1,747</b> <del>Rs 2495</del> <span className="text-danger">30% off</span>
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

export default Bags1
