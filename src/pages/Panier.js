import React from 'react'
function Panier({ panierItems ,}) {
  return (
    <div >
      <h2>Panier</h2>
      <ul > 
        {panierItems.map((item, index) => (
                   <li key={index}>
                   <img src={item.image} alt={item.name} />
                   <div>
                     <p>{item.name}</p>
                     <p>{item.price}€</p>
                   </div>
                 </li>
       
        ))}
      </ul>
    </div>
  );
}

export default Panier;