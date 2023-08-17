import React from 'react';
import '../styles/Menu.css';

function MenuItem({ id, image, name, price, handleAddProduct }) {
  return (
    <div className="menuItem">
      <div className="menuItemImage" style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{price} dt</p>
      <button className="product-add-button" onClick={() => handleAddProduct({ id, image, name, price })}>
        Add to Cart
      </button>
    </div>
  );
}

export default MenuItem;
