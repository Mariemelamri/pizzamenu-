import React from 'react';
import '../styles/cart.css';


function Cart({ cartItems, handleAddProduct, handleRemoveProduct }) {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h1 className="cartTitle">Your Cart</h1>
      <div className="cartItemList">
        {cartItems.map((item, index) => (
          <div key={index} className="cartItem">

            <p>{item.name}</p>
            <p>{item.price} dt</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleAddProduct(item)}>+</button>
            <button onClick={() => handleRemoveProduct(item)}>-</button>
          </div>
        ))}
      </div>

      <div className="cartTotal">Total: {calculateTotal().toFixed(2)} dt</div>
    </div>
  );
}

export default Cart;