import Acc3 from '../assets/pictures/Practice/Acc3.webp'
import Acc7 from '../assets/pictures/Practice/Acc7.webp'
import Acc8 from '../assets/pictures/Practice/Acc8.webp'
import Acc9 from '../assets/pictures/Practice/Acc9.webp'
import Navbar from '../components/Navbar'
import Location from '../components/Location'
import {Link} from "react-router-dom"

const Bags1 = () => {
  return (
    <div>
      <Navbar/>
      <Location/>
    <div className='watch'>
      <Link to="/" className='one'>Home</Link><b> <i className="bi bi-chevron-double-right"></i>Fragrances</b>
            <hr/>
             <p >30 items found for<b> "Fragrances" </b></p>
          <hr/>
        
          
          <div className="ms-5 mt-3">
                      <div className="row row-cols-1 row-cols-md-4 g-4 px-4 mx-4 py-3 mt-2">
                     
                                                       <div className="col">
                                                         <a className="nav-link" href="#">
                                                           <div className="card h-100">
                                                             <img src={Acc3} className="card-img-top" alt="..." />
                                                             <div className="card-body">
                                                               <p className="card-text">
                                                                                                       <b>Trance 100 MI Perfume For<br />Guys</b><br />
                                        perfumes<br />
                                        <b>Rs 698</b> <del>Rs 895</del> <span className="text-danger">22% off</span> 
                                                               </p>
                                                             </div>
                                                           </div>
                                                         </a>
                                                       </div>
                                               
                                                       
                                                       <div className="col">
                                                         
                                                           <div className="card h-100">
                                                             <img src={Acc7} className="card-img-top" alt="..." />
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
                                                         <div className="card h-10">
                                                           <img src={Acc9} className="card-img-top" alt="..."/>
                                                           <div className="card-body">
                                                             <p className="card-text">
                                                            <b>Fastrack No Nasties<br />Perfume Spray Upbeat</b><br />
                                        Perfume Spray<br />
                                        <b>Rs 228</b> <del> Rs 285</del> <span className="text-danger">20% off</span>
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
