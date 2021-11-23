import React, {useState}  from 'react'

export const ItemCount = () => {
    const stock = 15;
    const [counter, setCounter] = useState(0);
    const Add = () => {
        counter < stock ? setCounter(counter + 1) : alert("No queda más stock");
    }
    const Substract = () => {
        counter > 0 && stock > 0 ? setCounter(counter - 1) : alert("Que te pensas que vas a comer menos una hamburguesa? para un poco!!");
    }


    return (
        <div className="ItemCount">
            <p>{counter}</p>
            <button onClick={Add}> + </button>
            <button onClick={Substract}> - </button>

            
        </div>
    )
}
