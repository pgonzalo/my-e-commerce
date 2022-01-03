import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useParams  } from "react-router-dom";

//FIREBASE/
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

import Item from "../Item/Item";


const ItemCategory = () => {
  const [items, setItems] = useState([]);
  let category = useParams();  
  console.log(category);


  useEffect(() => {
    const getProducts = async () => {
  
      const q = query(collection(db, "Products"), where('category', '==', category.category) );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        console.log(doc);
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItems(docs);
    };
    getProducts();
  }, [category.category]);
 

  return (
    <div>
      <h1 className="title"> Nuestras comidas </h1>
      <div className="Item-List">
        {items.map((item) => {
          return (
            <Link to={`/detail/${item.id}`}>
              <Item data={item} key={item.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ItemCategory;