import React from 'react';
import tree2 from '../assets/pictures/Practice/tree2.webp';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Location from '../components/location'


const Open2 = () => {
  const { cartItems, addToCart } = useCart();
  const navigate = useNavigate();

  const product = {
    id: 1,
    title: "Fastrack Vyb Material Quartz Analog Brown Dial Metal Strap Watch For Guys",
    price: 1895.00,
    image: tree2,
    color: 'Red',
  };

  const isAdded = cartItems.some(item => item.id === product.id);

  const handleAdd = () => {
    if (!isAdded) {
      addToCart(product);
    }
  };

  const handleBuyNow = () => {
    if (!isAdded) {
      addToCart(product);
    }
    navigate('/cart');
  };

  return (
    <div>
      <Navbar/>
      <Location/>
   
    <div
      style={{
        display: 'flex',
        width: '100%',
        minHeight: '100vh',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img
          src={tree2}
          alt="Watch"
          style={{
            maxWidth: '90%',
            maxHeight: '90vh',
            objectFit: 'contain',
            borderRadius: '10px',
          }}
        />
      </div>

      
      <div style={{ flex: 1, padding: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem' }}>{product.title}</h2>
        <p>Guys Watch</p>
        <br/>
        
        <h3 style={{ margin: '1rem 0' }}>₹ {product.price}</h3>
        <p>(inclusive of all taxes)</p>
      
        <p >
          <br/>
          <b style={{ color: 'red', marginTop: '1rem',textDecoration:'underline' }}>Login/Signup</b> to use NeuCoins on this purchase
        </p>
        
        <button>Only 1 left in stock!!!</button>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <button
            onClick={handleAdd}
            disabled={isAdded}
            style={{
              flex: 1,
              backgroundColor: ' grey',
              color: 'white',
              padding: '15px',
              fontSize: '16px',
              fontWeight: 'bold',
              border: '1px',
              cursor: isAdded ? 'not-allowed' : 'pointer',
              borderRadius: '5px',
            }}
          >
            {isAdded ? 'Added to Cart' : 'Add to Cart'}
          </button>

          <button
            
            style={{
              flex: 1,
              backgroundColor: 'orangered',
              color: '#fff',
              padding: '15px',
              fontSize: '16px',
              fontWeight: 'bold',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Buy Now
          </button>
        </div>

        
        <div
          className="product-icons"
          style={{
           
            display: 'flex', flexDirection: 'row',gap:'5px', alignItems: 'center'
          }}
        >
          {[
            { icon: 'bi-shield-check', text: '24 Months Warranty' },
            { icon: 'bi-arrow-counterclockwise', text: '7 Days Return' },
            { icon: 'bi-gear', text: 'Serviced Across India' },
            { icon: 'bi-truck', text: 'Free Shipping\nAcross India' },
            { icon: 'bi-cash', text: 'Pay on Delivery\nAvailable' },
          ].map((item, index) => (
            <div
              key={index}
              className="icon-item"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1 0 20%', minWidth: '100px' }}
            >
              <i className={`bi ${item.icon}`} style={{ fontSize: '24px', marginBottom: '5px' }}></i>
              <p style={{ textAlign: 'center', whiteSpace: 'pre-line' }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
   </div>
  );
};

export default Open2;
