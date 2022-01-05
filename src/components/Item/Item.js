import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Item.css";

const Item = ({ data }) => {
  return (
    <div className="itemContainer">
      <Card className="item">
        <Image src={data.img} wrapped ui={false} className="img" size="medium" bordered />
        <Card.Content>
          <Card.Header>{data.name}</Card.Header>
          <Card.Meta>
            <span className="date">{data.category}</span>
          </Card.Meta>
          <Card.Description>{data.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          ${data.price} | Stock: {data.stock}
        </Card.Content>
      </Card>
    </div>
  );
};
export default Item;
