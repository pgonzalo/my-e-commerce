// import React, { useEffect, useState } from "react";

// import Item from "../Item/Item";
// import "./ItemDetailContainer.css";

// const ItemDetailContainer = () => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_API_URL}`)
//       .then((res) => res.json())
//       .then((json) => setItems(json))
//       .catch(error => console.log('Error: ', error))
//   }, []);

//   return (

//         <div className='Item-Detail-Container'>
//             <h1> 'ItemDetailContaier' </h1>
//           {items.filter((user) => {
//             return <Item data={user} key={user.id} />;
//           })}
//         </div>

//     );

// };

//  export default ItemDetailContainer;

import React, { useEffect, useState } from "react";

import { Item } from "semantic-ui-react";
import axios from "axios";
import { useParams } from "react-router";

function ItemDetailContainer() {
  let id = useParams();

  let userID = id.id;

  const [item, setItem] = useState();

  useEffect(() => {
    axios(`https://api.github.com/users/${userID}`).then((res) => {
      setItem(res.data);
      console.log(res);
    });
    console.log(item);
  }, []);

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

