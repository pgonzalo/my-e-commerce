import React from 'react';
import { Card,  Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';
import "./Item.css";

const Item = ({ data }) => (
  <Card style={{ width: '18rem' }} >
    <Image src={data.avatar_url} wrapped ui={false} className='img' />
    <Card.Content>
      <Card.Header>{data.login}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.type}</span>
      </Card.Meta>
      <Card.Description>
        {data.url}
      </Card.Description>
      <ItemCount />
      <Link to={`/item/${data.id}`}>
        <Button id="button" variant="danger">Agregar</Button>
      </Link>

    </Card.Content>
   
  </Card>
)

export default Item;