import React from "react";
import UseCounter from "../hooks/UseCounter"; 

const CounterCustomHook = ({stock, onAdd}) => {
    const {add, substract, reset, count} = UseCounter(stock)
    return(
        <div>
            <div>
                <button className='btn' onClick={substract}> - </button>
                <p>{count}</p>
                <button className='btn' onClick={add}> + </button>
                <button className='btn' onClick={reset}> Reset </button>
            </div>

            <button className='btn' onClick={() => onAdd(count)}>Confirmar</button>
            <p>Stock:{stock}</p>
        </div>
    )
}

export default CounterCustomHook 