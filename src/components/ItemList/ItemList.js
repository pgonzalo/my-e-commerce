import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

//FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
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
      )}
      ;
    </>
  );
};

export default ItemList;
