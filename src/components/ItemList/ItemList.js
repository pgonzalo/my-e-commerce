import React, { useEffect, useState } from "react";

import Item from "../Item/Item";

const ItemList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  }, []);

  return (
    <div className="ItemList">
      <h1> Item List </h1>
      <div className='Item'>
        {users.map((user) => {
          return <Item data={user} key={user.id} />;
        })}
      </div>
    </div>
  );
};

export default ItemList;
