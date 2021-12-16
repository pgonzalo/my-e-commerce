import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Item } from "semantic-ui-react";
import axios from "axios";
import { useParams } from "react-router";
import "./ItemDetailContainer.css";
import { Link } from "react-router-dom";
import { useCartContext } from '../Context/CartContext'

function ItemDetailContainer({item}) {
  const{addToCart} = useCartContext();
  const [changeButton, setChangeButton] = useState(false)
 
  const onAdd = (quantity) => {
    addToCart(item, quantity)
    setChangeButton(true)
    alert(`Ingresaste ${counter} ${prod} al carrito.`);
  }

  // const addToCart = (counter) => {
  //   let prod;
  //   counter > 1 ? prod = 'productos' : prod = 'producto';
  //   alert(`Ingresaste ${counter} ${prod} al carrito.`);
  // }


  let id = useParams();

  let userID = id.id;

  const [item, setItem] = useState();

  useEffect(() => {
    axios(`https://api.github.com/users/${userID}`).then((res) => {
      setItem(res.data);
      console.log(res);
    });
    console.log(item);
  }, [userID]);

  return (
    <div className="ItemList-detail">
      {item && (
        <div>
          <Item.Group>
            <Item>
              <Item.Image size="big" src={item.avatar_url} />

              <Item.Content>
                <Item.Header as="a">{item.login}</Item.Header>
                <Item.Meta>{item.emails_url}</Item.Meta>
                <Item.Description>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo ipsa ipsum iusto, est, harum odit vel unde id quos
                  non nostrum, tenetur molestias cumque! Esse possimus eveniet
                  officiis facilis. Praesentium!
                </Item.Description>
                <>
                  {
                    !changeButton &&
                    <ItemCount stock={12} onAdd={addToCart} initial={0} changeButton={changeButton} />
                  }
                  {
                    changeButton &&
                    <div>
                      <Link to='/'>
                        <button id="button-cart" variant="outline-dark">Continuar comprando</button>
                      </Link>
                      <Link to='/cart'>
                        <button id="button-cart" variant="outline-dark">Finalizar compra</button>
                      </Link>
                    </div>
                  }
                  
                </>
                <Item.Extra>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Explicabo ipsa ipsum iusto, est, harum odit vel unde id quos
                  non nostrum, tenetur molestias cumque!{" "}
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;
