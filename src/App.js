import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import '../src/components/Footer';
import Menu from '../src/pages/Menu';
import Home from './pages/Home';
import Footer from '../src/components/Footer';
import Contact from './pages/Contact';
import About from './pages/about'; // Use lowercase 'about'
import { MenuList } from '../src/helpers/MenuList';
import Panier from './pages/Panier';
import { useState } from 'react';


function App() {
  const [panierItems, setPanierItems] = useState([]);

  const addToPanier =(item) => {
    setPanierItems([...panierItems, item]);
  };


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu items={MenuList} addToPanier={addToPanier} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/panier" element={<Panier panierItems={panierItems} />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;