import React, { useEffect, useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Item } from "semantic-ui-react";
import { useParams } from "react-router";
import "./ItemDetailContainer.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

//FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";


function ItemDetailContainer({items}) {
  const { addToCart } = useContext(CartContext);
  const [changeButton, setChangeButton] = useState(false)
 
  const onAdd = (counter) => {
    addToCart(items, counter)
    setChangeButton(true)
    alert(`Ingresaste ${counter} ${items} al carrito.`);
  }

 //  const addToCart = (counter) => {
 //    let prod;
 //    counter > 1 ? prod = 'productos' : prod = 'producto';
  //   alert(`Ingresaste ${counter} ${prod} al carrito.`);
 //  }

  const [item, setItem] = useState([]);
  
  let paramsID = useParams();

  const itemFiltered = item.filter((item) => {
    return item.id === paramsID.id;
  })
  

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "Products"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setItem(docs);
    };
    getProducts();
  }, []);

  return (
    <div className="ItemList-detail">
      {itemFiltered.map((item) => {
        return (
          <div>
          <Item.Group>
            <Item key={item.id}>
              <Item.Image size="big" src={item.img} />

              <Item.Content>
                <Item.Header as="a">{item.name}</Item.Header>
                <Item.Meta>$ {item.price} </Item.Meta>
                <Item.Description> {item.description} </Item.Description> 
                <br></br>
                <>
                  {
                    !changeButton &&
                    <ItemCount stock={item.stock} item={item} onAdd={addToCart} initial={0} changeButton={changeButton} />
                  }
                  {
                    changeButton &&
                    <div>
                      <Link to='/'>
                        <button id="button-cart" variant="outline-dark">Continuar comprando</button>
                      </Link>
                      <Link to='/shopping'>
                        <button id="button-cart" variant="outline-dark">Finalizar compra</button>
                      </Link>
                    </div>
                  }
                  
                </>

              </Item.Content>
            </Item>
          </Item.Group>
        </div>
        )
        
})}
    </div>
  );
}

export default ItemDetailContainer;
