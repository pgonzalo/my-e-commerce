import React, { useEffect, useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Item } from "semantic-ui-react";
import { useParams } from "react-router";
import "./ItemDetailContainer.css";

import { CartContext } from "../Context/CartContext";
import Spinner from "../Spinner/Spinner";


//FIREBASE
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

function ItemDetailContainer({ items }) {
  const { addToCart } = useContext(CartContext);
  




  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  let paramsID = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(
        collection(db, "Products"),
        where(documentId(), "==", paramsID.id),
        
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItem(docs);
    };
    getProducts();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [paramsID.id]);

  return (
    <>
      {isLoading ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <div className="ItemList-detail">
          {item.map((item) => {
            return (
              <div>
                <Item.Group className="Item-Group">
                  <Item key={item.id}>
                    <Item.Image size="big" src={item.img} />

                    <Item.Content>
                      <Item.Header as="a">{item.name}</Item.Header>
                      <br></br>
                      <Item.Meta> {item.description} </Item.Meta>
                      <br></br>
                      <Item.Description>$ {item.price} </Item.Description>
                      <br></br>

                      <>
                        
                          <ItemCount
                            stock={item.stock}
                            item={item}
                            onAdd={addToCart}
                            initial={0}
                            
                          />
                        

                        
                      </>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default ItemDetailContainer;
