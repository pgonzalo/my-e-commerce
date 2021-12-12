import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount"
import { Item } from "semantic-ui-react";
import axios from "axios";
import { useParams } from "react-router";


function ItemDetailContainer({ stock }) {
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
              <Item.Image size='big' src={item.avatar_url} />
        
              <Item.Content>
                <Item.Header as='a'>{item.login}</Item.Header>
                <Item.Meta>{item.emails_url}</Item.Meta>
                <Item.Description>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Explicabo ipsa ipsum iusto, est, harum odit vel unde id
                    quos non nostrum, tenetur molestias cumque! Esse
                    possimus eveniet officiis facilis. Praesentium!
                </Item.Description>
               
                <ItemCount/>
                
                
                <Item.Extra>Additional Details</Item.Extra>
              </Item.Content>
            </Item>
   
       
            </Item.Group>
          </div>
      )}
    </div>
  );
}

export default ItemDetailContainer;

