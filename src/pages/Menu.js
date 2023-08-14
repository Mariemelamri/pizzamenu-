import React from "react";

import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";
import { Navigate } from "react-router-dom";

function Menu({ addToPanier }) {
  const handlenextpage =() => {
    Navigate("/src/pages/Panier.js", {
      state:{
        menuItem : MenuItem 
      }
    });
  }
 
    return (
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div key={key} className="menuItem">
              <MenuItem
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            <button onClick={handlenextpage}>
  Ajouter au panier
</button>


            </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Menu;