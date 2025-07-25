import {Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import Watches from './pages/Watches';
import SmartWatches from './pages/Smart Watches';
import VybByFastrack from './pages/Vyb By Fastrack';
import Sale from './pages/Sale'
import Gifting from './pages/Gifting';
import Accessories from './pages/Accessories';
import More from './pages/More';
import AnalogWatches from './pages/Analog Watches';
import SmartWatches1 from './pages/Smart Watches1';
import Bags1 from './pages/Bags1';
import Perfumes from './pages/Perfumes'
import Shop from './pages/Shop';
import Party1 from './pages/Party1';
import Street1 from './pages/Street1';
import Open1 from './pages/Open1';
import Open2 from './pages/Open2';
import Open3 from './pages/Open3';
import Open4 from './pages/Open4';
import CartPage from './pages/CartPage';
import DeliveryInfo from './pages/DeliveryInfo';
import Payment from './pages/Payment';
import OrderSuccess from './pages/OrderSuccess';


function App() {

  return (
  <>
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="Watches" element={<Watches />} />
          <Route path="SmartWatches" element={<SmartWatches />} />
          <Route path="Sale" element={<Sale/>} />
          <Route path="VybByFastrack" element={<VybByFastrack/>} />
          <Route path='Gifting' element={<Gifting/>} />
          <Route path='Accessories' element={<Accessories/>} />
          <Route path="More" element={<More/>} />
          <Route path="AnalogWatches" element={<AnalogWatches />} />
          <Route path="SmartWatches1" element={<SmartWatches1 />} />
          <Route path="Bags1" element={<Bags1/>} />
          <Route path="Perfumes" element={<Perfumes/>} />
          <Route path="Shop" element={<Shop/>} />
          <Route path="Party1" element={<Party1/>} />
          <Route path="Street1" element={<Street1/>} />
          <Route path="Open1" element={<Open1/>} />
          <Route path="Open2" element={<Open2/>} />
          <Route path="Open3" element={<Open3/>} />
          <Route path="Open4" element={<Open4/>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/delivery" element={<DeliveryInfo />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order-success" element={<OrderSuccess />} />
      </Routes>

  </>
  )
}

export default App;












