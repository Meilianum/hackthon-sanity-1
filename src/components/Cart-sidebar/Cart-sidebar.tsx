
import React from 'react';

function CartSidebar() {
  const sidebarStyle = {
    position: 'absolute',
    top: '-512px',
    left: '3787px',
    width: '1440px',
    height: '3107px',
    opacity: 0, // Adjust as needed
    transition: 'all 0.3s ease-in-out',
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
  };

  return (
    <div>
      <img src="/images/Cart Sidebar.svg" alt="cart" style={imageStyle} />
    </div>
  );
}

export default CartSidebar;