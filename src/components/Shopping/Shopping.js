import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import { Header, Image, Table } from 'semantic-ui-react'
import FormComponent from "../../components/FormComponent/FormComponent";
import './Shopping.css';

const Shopping = () => {
    const { cartList } = useContext(CartContext);

    let total = 0;

    return (
        <div>
            <Table celled padded>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell singleLine>Nombre</Table.HeaderCell>
                    <Table.HeaderCell>Imagen</Table.HeaderCell>
                    <Table.HeaderCell>Precio</Table.HeaderCell>
                    <Table.HeaderCell>Cantidad</Table.HeaderCell>
                    <Table.HeaderCell>Descripción</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                {cartList && cartList.map((items) => {
                    total = total += items.item.price;
                    let { item } = items;
                    return (
                        <Table.Row verticalAlign="middle" textAlign="center">     
                            <Table.Cell>
                            <Header as='h5' textAlign='center'>
                                {item.name}
                            </Header>
                            </Table.Cell>
                            <Table.Cell singleLine><Image src={item.img} height={80} width={80}/></Table.Cell>
                            <Table.Cell>
                                $ {item.price}
                            </Table.Cell>
                            <Table.Cell>
                                {items.quantity}
                            </Table.Cell>
                            <Table.Cell>
                                {item.description}
                            </Table.Cell>
                        </Table.Row>
                    )
                })}
                <Table.Cell as='h5'>
                    Total: $ {total}
                </Table.Cell>
                </Table.Body>
            </Table>
            <FormComponent />
        </div>
    )
}

export default Shopping
