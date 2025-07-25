import React from 'react';
import { useCart } from './CartContext';
import Navbar1 from '../components/Navbar1'
import Location from '../components/location'

import { useNavigate } from 'react-router-dom';


const Cart = () => {
  const navigate = useNavigate();
     const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Delivery Info Submitted:", formData);
  
  navigate('/payment'); 
};

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
   
    <div>
        <Navbar1/>
        <Location/>
        
    
    <div className="cart-container">
      
      <div className="cart-left">
        
        <h2>SHOPPING CART ({cartItems.length} Item)</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-product">
            <img src={item.image} alt={item.title} className="cart-product-image" />
            <div className="cart-product-details">
              <h3>{item.title}</h3>
              <p>₹ {item.price}</p>
              <div className="quantity-control">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <p>Total: ₹ {item.price * item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)} className="delete-btn">
                Delete from Bag
              </button>
            </div>
          </div>
        ))}
      </div>

     
      <div className="cart-summary">
        <h3>ORDER SUMMARY</h3>
        <p>Total Items: {cartItems.length}</p>
        <p>Order Value: ₹ {total}</p>
        <p>Shipping: Free</p>
        <p style={{ color: 'green' }}>Overall Savings: ₹ 0.00</p>
        <hr />
        <h3>Grand Total: ₹ {total}</h3>

        
        <button className="checkout-button" onClick={() => navigate('/delivery')}>
  Proceed to Checkout
</button>

      </div>
    </div>
 
</div>
  );
};

export default Cart;
