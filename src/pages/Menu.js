import React from 'react';
import productItems from '../data/data';
import MenuItem from '../components/MenuItem';
import '../styles/Menu.css';

function Menu({ handleAddProduct }) {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {productItems.map((menuItem, index) => (
          <div key={index} className="menuItem">
          
            <MenuItem
              id={menuItem.id}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
              handleAddProduct={handleAddProduct}
            />
           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
