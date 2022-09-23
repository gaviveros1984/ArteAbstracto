import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom";

const CartView = () =>{
    const { carrito, quitarProductoCarrito} = useContext(CarritoContext)

    return(
        <div>
            {
            carrito.map((element) => (
                <div key={element}>
                    <span>{element.name}</span>
                </div>
            ))
            }
        </div>
    )
}

export default CartView;