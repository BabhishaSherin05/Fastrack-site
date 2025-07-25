import React from 'react'
import Ban1 from '../assets/pictures/practice/ban1.webp'
import Ban2 from '../assets/pictures/practice/ban2.webp'
import Ban3 from '../assets/pictures/practice/ban3.webp'

const Banner = () => {
  return (
    <div>
     <div id="carouselExampleAutoplaying" class="carousel slide height-100" data-bs-ride="carousel">
    <div class="carousel-inner h-25 ">
        <div class="carousel-item active">
          <img src={Ban1} class="d-block w-100 h-75 mt-5 mb-5" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={Ban2} class="d-block w-100 h-75 mt-5 mb-5" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={Ban3} class="d-block w-100 h-75 mt-5 mb-5" alt="..."/>
        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
        </div> 
    </div>
  )
}

export default Banner
