import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Location from '../components/Location'
import Images from '../components/Images'
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
