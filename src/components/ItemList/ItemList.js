import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "Products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getProducts();
  }, []);
 

  return (
    <div>
      <h1 className="title"> Nuestras comidas </h1>
      <div className="Item-List">
        {items.map((item) => {
          return (
            <Link to={`/detail/${item.name}`}>
              <Item data={item} key={item.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ItemList;
