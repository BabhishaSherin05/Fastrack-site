// src/pages/OrderSuccess.jsx

import React, { useEffect } from 'react';
import Navbar1 from '../components/Navbar1';
import { useCart } from './CartContext'; // ✅ ensure correct import path

const OrderSuccess = () => {
  const { clearCart } = useCart(); // ✅ this will now work correctly

  useEffect(() => {
    clearCart();
  }, [clearCart]); // ✅ include dependency for clean practice

  return (
    <div>
      <Navbar1 />

      <div style={styles.container}>
        <h2 style={styles.title}>Order Placed Successfully!</h2>
        <p style={styles.message}>Thank you for shopping with us.</p>
      </div>
    </div>
  );
};

export default OrderSuccess;

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem',
    background: '#fff',
    maxWidth: '500px',
    margin: '100px auto',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  message: {
    fontSize: '18px',
    color: '#555',
  },
};
