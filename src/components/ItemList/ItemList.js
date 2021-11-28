import React, { useEffect, useState } from "react";


import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}`)
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch(error => console.log('Error: ', error))
  }, []);

  return (
    
      <div className="Item-List">
        <h1> Item List </h1>
        <div className='Item-List'>
          {items.map((user) => {
            return <Item data={user} key={user.id} />;
          })}
        </div>
      </div>
    );
        
};

export default ItemList;
