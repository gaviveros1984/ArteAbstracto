import React, { useContext, useEffect, useState } from "react";
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom";
import { Button } from "bootstrap";
import CartItem from "../cartItem/CartItem";

const CartView = () =>{
    const { carrito, quitarProductoCarrito, getTotal} = useContext(CarritoContext)

    return(
        <>
        {carrito.length > 0 ? 
        (<div>
            {
            carrito.map((e) => <CartItem key={e.id} item={e} />)
            }
            <div>
                <h4>Precio total: {getTotal()} </h4>
                <button>Confirmar compra</button>
            </div>
        </div>
        ):(
            <div>
            <h1>No hay elementos en el carrito</h1>
            <Link to='/'>
                <button>Seguir comprando</button>
            </Link>
        </div>
        )}
        </>
    )
}

export default CartView;