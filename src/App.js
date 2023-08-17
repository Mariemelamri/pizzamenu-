import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from '../src/components/Footer';
import Menu from '../src/pages/Menu';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/about' ;
import Cart from './pages/Panier';
import data from './data/data';

function App() {
  const { productItems } = data;
  const [CartItems, setCartItems] = React.useState([]);

  const handleAddProduct = (product) => {
    const productExist = CartItems.find(item => item.id === product.id);
    if (productExist) {
      setCartItems(prevCartItems =>
        prevCartItems.map(item =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems(prevCartItems => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const productExist = CartItems.find(item => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== product.id));
    } else {
      setCartItems(prevCartItems =>
        prevCartItems.map(item =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <div className="App">
      <Router>
      <Navbar cartItems={CartItems} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu MenuItem={productItems}   handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart cartItems={CartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
