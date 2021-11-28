import React, { useEffect, useState } from "react";


import Item from "../Item/Item";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch(error => console.log('Error: ', error))
  }, []);

  return (
    
        
        <div className='Item-Detail-Container'>
            <h1> 'ItemDetailContaier' </h1>
          {items.map((user) => {
            return <Item data={user} key={user.id} />;
          })}
        </div>
      
    );
        
};

 export default ItemDetailContainer;
