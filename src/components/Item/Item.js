import React from "react";
import { Card, Image } from "semantic-ui-react";
import ItemCount from "../ItemCount/ItemCount"
import "./Item.css";

const Item = ({ data }) => (
  <div className="item">
    <Card>
      <Image src={data.avatar_url} wrapped ui={false} className="img" />
      <Card.Content>
        <Card.Header>{data.login}</Card.Header>
        <Card.Meta>
          <span className="date">{data.type}</span>
        </Card.Meta>
        <Card.Description>{data.url}</Card.Description>
        <ItemCount />
      </Card.Content>
    </Card>
  </div>
);

export default Item;
