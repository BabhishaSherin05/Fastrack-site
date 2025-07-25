import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/carousel'
import Location from '../components/location'
import Images from '../components/images'
import Banner from '../components/Banner'
import Cards2 from '../components/Cards2'
import Vibe from '../components/Vibe'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Location/>
        <Carousel/>
        <Images/>
        <Banner/>
        <Cards2/>
        <Vibe/>
        <Footer/>
      
    </div>
  )
}

export default Home
