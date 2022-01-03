import React, { useEffect, useState, useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Item } from "semantic-ui-react";
import { useParams } from "react-router";
import "./ItemDetailContainer.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import Spinner from "../Spinner/Spinner";

//FIREBASE
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";

function ItemDetailContainer({ items }) {
  const { addToCart } = useContext(CartContext);
  const [changeButton, setChangeButton] = useState(false);

  const onAdd = (counter) => {
    addToCart(items, counter);
    setChangeButton(true);
    alert(`Ingresaste ${counter} ${items} al carrito.`);
  };

  //  const addToCart = (counter) => {
  //    let prod;
  //    counter > 1 ? prod = 'productos' : prod = 'producto';
  //   alert(`Ingresaste ${counter} ${prod} al carrito.`);
  //  }

  const [item, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let paramsID = useParams();

  useEffect(() => {
    const getProducts = async () => {
      const q = query(collection(db, "Products"), where(documentId(), '==', paramsID.id));
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
				<div className='spinner'>
					<Spinner />
				</div>
			) : (
      <div className="ItemList-detail">
        {item.map((item) => {
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
                      {!changeButton && (
                        <ItemCount
                          stock={item.stock}
                          item={item}
                          onAdd={addToCart}
                          initial={0}
                          changeButton={changeButton}
                        />
                      )}
                      {changeButton && (
                        <div>
                          <Link to="/">
                            <button id="button-cart" variant="outline-dark">
                              Continuar comprando
                            </button>
                          </Link>
                          <Link to="/shopping">
                            <button id="button-cart" variant="outline-dark">
                              Finalizar compra
                            </button>
                          </Link>
                        </div>
                      )}
                    </>
                  </Item.Content>
                </Item>
              </Item.Group>
            </div>
          );
        })}
      </div>
      )};
    </>
  );
}

export default ItemDetailContainer;
