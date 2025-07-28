import React from 'react'
import Navbar from '../components/Navbar'
import Location from '../components/Location'
import {Link} from "react-router-dom"

const More = () => {
  return (
    <div>
      <Navbar/>
      <Location/>
    <div className='sale'>
      <Link to="/" className='one'>Home</Link><b> <i class="bi bi-chevron-double-right"></i> More</b>
        <hr/>
         <b>" Nothing New "</b>
    <hr/>
    
    <div className='more'>
      <h1>NOTHING IN THIS PAGE </h1>
      
    </div>
    </div>
  </div>
  )
}

export default More