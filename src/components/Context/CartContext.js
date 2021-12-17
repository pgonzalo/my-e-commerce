import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState();
    const [quantItems, setQuantItems] = useState(0);

        function addToCart(item, quantity){
            if (cartList){
                const index = cartList.findIndex(obj => {return obj.item.id === item.id;})
                if (index !== -1) {
                    const newCart = cartList;
                    newCart[index].quantity = newCart[index].quantity + quantity;
                    setCartList(newCart);
                }
                else setCartList([...cartList, {item, quantity: quantity}]);
            }
            else setCartList([{ item, quantity: quantity}]);
            setQuantItems(quantItems + quantity);
        }
        console.log('context', cartList );

    return(
        <CartContext.Provider value={{addToCart, cartList, setCartList}}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;



