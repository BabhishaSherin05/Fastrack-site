
import React from 'react';
import Navbar1 from '../components/Navbar1'
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    
    navigate("/order-success"); 
  };

  return (
    <div>
      <Navbar1/>
    <div style={styles.container}>
      <h2 style={styles.title}>Payment Options</h2>

      <div style={styles.option}>
        <input type="radio" id="cod" name="payment" value="Cash on Delivery" defaultChecked />
        <label htmlFor="cod">Cash on Delivery (COD)</label>
      </div>

      <div style={styles.option}>
        <input type="radio" id="upi" name="payment" value="UPI" />
        <label htmlFor="upi">UPI / Google Pay / PhonePe</label>
      </div>

      <div style={styles.option}>
        <input type="radio" id="card" name="payment" value="Card" />
        <label htmlFor="card">Credit / Debit Card</label>
      </div>

      <button style={styles.button} onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
    </div>
  );
};

export default Payment;

const styles = {
  container: {
    maxWidth: '600px',
    margin: 'auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    marginBottom: '1rem',
  },
  option: {
    marginBottom: '1rem',
    fontSize: '18px',
  },
  button: {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: 'orangered',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    display: 'block',
    margin: '20px auto 0',
  }
};
