import React from 'react';
import ItemList from '../ItemList/ItemList';


export const ItemListContainer = ({greeting}) => {
    return (
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList />
            
        </div>
    )
}
