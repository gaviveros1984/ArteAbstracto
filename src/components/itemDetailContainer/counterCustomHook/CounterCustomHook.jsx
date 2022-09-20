import React from "react";
import UseCounter from "../../../hooks/UseCounter";
import { useCarritoContext } from '../../../context/CarritoContext';



const CounterCustomHook = ({stock, name, price}) => {
    const {add, substract, reset, count} = UseCounter(stock) // LLAMA AL USECOUNTER

    const { agregarProductoCarrito } = useCarritoContext();

    return(
        <div>
            <div>
                <button className='btn' onClick={substract}> - </button>
                <p>{count}</p>
                <button className='btn' onClick={add}> + </button>
                <button className='btn' onClick={reset}> Reset </button>
            </div>

            <button className='btn' onClick={() => agregarProductoCarrito(name, price, count)}>Confirmar</button>
            <p>Stock:{stock}</p>
        </div>
    )
}

export default CounterCustomHook 