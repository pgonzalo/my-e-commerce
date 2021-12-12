import React, { useState } from "react";
import { InputGroup, Button, FormControl } from "react-bootstrap";
import "./ItemCount.css";



const ItemCount = ({ stock, onAdd }) => {
  console.log(stock);
  const [counter, setCounter] = useState(0);

  const Add = () => {
    counter < stock ? setCounter(counter + 1) : alert("No queda más stock");
  };
  const Substract = () => {
    counter > 0 && stock > 0 ? setCounter(counter - 1) : alert("Muy ligth lo tuyo!!");
  };

  return (
    <div>
    <InputGroup className="mb-3 form-calculator-minmax">
    <Button
      variant="outline-secondary"
      id="button-addon1"
      onClick={Substract}
    >
      -
    </Button>
    <FormControl className="counter"
      aria-label="Example text with button addon"
      aria-describedby="basic-addon1"
      value={counter}
      onChange={setCounter}
      
      readOnly
    />
    <Button variant="outline-secondary" 
    id="button-addon1" 
    onClick={Add}
    >
      +
    </Button>
    
    
  </InputGroup>
  {
    counter > 0 ?
    <div className="ui bottom attached button" onClick={() => onAdd(counter)}>
      <i className="cart icon"></i>
      Añadir al carrito
      </div>
      :
      <div className="ui bottom attached button disabled">
      <i className="cart icon"></i>
      Añadir al carrito
      </div>
  }
  
      {/* // <Button  className="compra" onClick={alert("Coprando")}>
      //   Comprar
      // </Button> */}


  </div>
  


 

  );

  
};

export default ItemCount;