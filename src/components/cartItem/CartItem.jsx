import React, { useContext } from 'react'
import { CarritoContext } from "../../context/CarritoContext"


const CartItem = ({item}) => {

    const { carrito, quitarProductoCarrito, getTotal} = useContext(CarritoContext)
 
    return (
        <>
            <div className='card mb-3' style={{maxWidth: '540px'}}>
                <div className='row g-0'>
                    <div className='col-md-4'>
                        <img src={item.img} className='img-fluid rounded-start' alt={item.title}/>
                    </div>
                    <div className='col-md-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{item.title}</h5>
                            <p className='card-text'>Cantidad: {item.amount}</p>
                            <p className='card-text'>Precio unitario: {item.price}</p>
                            <p className='card-text'>Precio: {item.price * item.amount}</p>
                            <button className='btn btn-warning' onClick={()=>quitarProductoCarrito(item.id)}>Eliminar Producto</button>
                        </div>

                    </div>
                </div>
            </div>
               
        </>
    )
}

export default CartItem