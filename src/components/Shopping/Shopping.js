import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import FormComponent from "../../components/FormComponent/FormComponent";

const Shopping = () => {
    const { cartList } = useContext(CartContext);
    console.log(cartList);
    return (
        <div>
            <FormComponent />
        </div>
    )
}

export default Shopping
