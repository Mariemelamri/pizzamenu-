import React, { useState } from 'react';
import logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
       <div className="leftSide" id={menuOpen ? "open" : "close"}>
        <img src={logo} alt="Logo" />
        <div className="hiddenLinks">
            <Link to="/"> Home</Link>
            <Link to="/menu"> Menu</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/panier"> Panier </Link>
          </div>
      </div>
      <div className="rightSide" >
            <Link to="/"> Home</Link>
            <Link to="/menu"> Menu</Link>
            <Link to="/about"> About</Link>
            <Link to="/contact"> Contact </Link>
            <Link to="/panier"> Panier </ Link>
            <button onClick={toggleMenu}>
              <ReorderIcon />
            </button>
        </div>
        
    </div>
  );
}

export default Navbar;
