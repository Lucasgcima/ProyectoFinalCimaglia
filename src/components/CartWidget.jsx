import React from 'react';

const CartWidget = () => {
  const cartCount = 3; 

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      🛒
      <span>{cartCount}</span>
    </div>
  );
};

export default CartWidget;
