import React from 'react';
import { BsCart3 } from 'react-icons/bs';
// import { Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import './CartWidget.css';
 
function CartWidget() {
    return (
        <div>
                  {/* <Link to={`/cart`}>
        <Button id="button" variant="green">Agregar</Button>
      </Link> */}
            <BsCart3 className="cart-icon" />
        </div>
    )
}
export default CartWidget;


