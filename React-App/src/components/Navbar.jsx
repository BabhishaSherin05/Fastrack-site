
import React from 'react';
import logo from '../assets/pictures/Practice/fastracklogo.png';
import { Link } from 'react-router-dom';
import { useCart } from '../pages/CartContext';
const Navbar = () => {
  const { cartItems } = useCart();

 
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light title">
      <div className="container-fluid">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            width="200"
            height="75"
            className="navbar-logo log"
          />
        </Link>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
          <div className="navbar-nav text-center gap-4">
            <Link to="/Watches" className="nav-link2">WATCHES</Link>
            <Link to="/SmartWatches" className="nav-link2">SMART WATCHES</Link>
            <Link to="/VybByFastrack" className="nav-link2">VYB BY FASTRACK</Link>
            <Link to="/Sale" className="nav-link2">SALE</Link>
            <Link to="/Gifting" className="nav-link2">GIFTING</Link>
            <Link to="/Accessories" className="nav-link2">ACCESSORIES</Link>
            <Link to="/More" className="nav-link2">MORE</Link>
          </div>
        </div>

        
        <div className="d-flex align-items-end ms-1 gap-4 icons position-relative me-4">
          <i className="bi bi-search"></i>
          <i className="bi bi-person"></i>
          <i className="bi bi-heart"></i>

         
          <div style={{ position: 'relative' }}>
            <Link to="/cart" className="nav-link2 position-relative">
              <i className="bi bi-bag" style={{ fontSize: '20px' }}></i>
              {totalQuantity > 0 && (
                <span
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-10px',
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '50%',
                    padding: '2px 6px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>

          <i className="bi bi-box2"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
