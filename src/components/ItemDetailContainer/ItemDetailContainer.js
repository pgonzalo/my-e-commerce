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

import { Card, Image } from "semantic-ui-react";
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
      <h1>Item Detail</h1>
      {item && (
        <Card key={item.id}>
          <Image src={item.avatar_url} wrapped ui={false} />

          <Card.Content>
            <Card.Header>{item.type}</Card.Header>
            <Card.Meta>
              <span className="date">{item.login}</span>
            </Card.Meta>
            <Card.Description>{item.login}</Card.Description>
          </Card.Content>
        </Card>
      )}
    </div>
  );
}

export default ItemDetailContainer;
