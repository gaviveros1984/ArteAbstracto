import React, {createContext, useCallback, useContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const CarritoContext = createContext()

const useCarritoContext = () => useContext(CarritoContext)

const CarritoProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([
        {id: '1', name:'test', price:'200', quantity: 1}
    ])

    const agregarProductoCarrito = (productName, productPrice, productQuantity) => {
        const foundProduct = carrito.find(
            (carrito) => carrito.name === productName);

        if (foundProduct){
            foundProduct.quantity++;
            setCarrito([...carrito])
        }else {
            setCarrito([...carrito, {
            id: uuidv4(),
            name: productName,
            price:productPrice,
            quantity: productQuantity},])
        }
    }   

    const quitarProductoCarrito = (producto) => {
        const auxCarrito = carrito
        let indice = auxCarrito.findIndex(p => producto.id == producto.id)
        auxCarrito.splice(indice, 1)
        setCarrito(auxCarrito)
    }

    const vaciarCarrito = () => {
        carrito = [];
    }

    return (
        <>
          <CarritoContext.Provider value = {{carrito, agregarProductoCarrito, quitarProductoCarrito, vaciarCarrito}}>
                {' '}
                {children}
          </CarritoContext.Provider>
        </> 
    );
}

export { CarritoContext, CarritoProvider, useCarritoContext};