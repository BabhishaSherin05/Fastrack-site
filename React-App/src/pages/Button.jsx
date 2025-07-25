import React, { useState } from 'react';

const Button = ({ itemId }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = () => {
    const isAlreadyAdded = cart.includes(itemId);

    if (!isAlreadyAdded) {
      setCart([...cart, itemId]);
    }
  };

  const isItemInCart = cart.includes(itemId);

  return (
    <div>
      <button onClick={handleAddToCart} disabled={isItemInCart}>
        {isItemInCart ? 'Item Already Added' : 'Button'}
      </button>
    </div>
  );
};

export default Button
