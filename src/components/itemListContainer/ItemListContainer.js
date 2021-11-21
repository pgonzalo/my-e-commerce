import React from 'react'
import { ItemCount } from '../itemCount/ItemCount'

export const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemCount />
        </div>
    )
}
