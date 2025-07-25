import React from 'react'
import Sale1 from '../assets/pictures/practice/sale1.webp'
import Sale2 from '../assets/pictures/practice/sale2.jpeg'
import Sale3 from '../assets/pictures/practice/sale3.webp'
import Sale4 from '../assets/pictures/practice/sale4.jpg'
import Sale5 from '../assets/pictures/practice/sale5.jpg'
import Sale6 from '../assets/pictures/practice/sale6.webp'
import Sale7 from '../assets/pictures/practice/sale7.jpg'
import Sale8 from '../assets/pictures/practice/sale8.jpg'

const carousel = () => {
  return (
    <div>
                  <div id="fastrackCarousel" class="carousel slide images" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#fastrackCarousel" data-bs-slide-to="0" class="active"></button>
                  <button type="button" data-bs-target="#fastrackCarousel" data-bs-slide-to="1"></button>
                  <button type="button" data-bs-target="#fastrackCarousel" data-bs-slide-to="2"></button>
                  <button type="button" data-bs-target="#fastrackCarousel" data-bs-slide-to="3"></button>
                  <button type="button" data-bs-target="#fastrackCarousel" data-bs-slide-to="4"></button>
                  <button type="button" data-bs-target="#fastrackCarousel" data-bs-slide-to="5"></button>
                  <button type="button" data-bs-target="#fastrackCarousel" data-bs-slide-to="6"></button>
                  <button type="button" data-bs-target="#fastrackCarousel" data-bs-slide-to="7"></button>
                  <button type="button" data-bs-target="#fastrackCarousel" data-bs-slide-to="8"></button>
                </div>
                <div class="carousel-inner img">
                  <div class="carousel-item active">
                    <img src={Sale1} class="d-block w-100" alt="Slide 1"/>
                  </div>
                  <div class="carousel-item">
                    <img src={Sale2} class="d-block w-100" alt="Slide 2"/>
                  </div>
                  <div class="carousel-item">
                    <img src={Sale3} class="d-block w-100" alt="Slide 3"/>
                  </div>
                  <div class="carousel-item">
                    <img src={Sale4} class="d-block w-100" alt="Slide 4"/>
                  </div>
                  <div class="carousel-item">
                    <img src={Sale5} class="d-block w-100" alt="Slide 5"/>
                  </div>
                  <div class="carousel-item">
                    <img src={Sale6} class="d-block w-100" alt="Slide 6"/>
                  </div>
                  <div class="carousel-item">
                    <img src={Sale7} class="d-block w-100" alt="Slide 5"/>
                  </div>
                  <div class="carousel-item">
                    <img src={Sale8} class="d-block w-100" alt="Slide 6"/>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#fastrackCarousel" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#fastrackCarousel" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </button>
            </div>
    </div>
  )
}

export default carousel
