import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/pizzaLogo.png';
import '../styles/Navbar.css';

function Navbar({cartItems }) {
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="leftSide">
        <img src={logo} alt="Logo" />
      </div>
      <div className="rightSide">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart" className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className="cartItemCount">{totalItemsInCart}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
