import React, {createContext, useCallback, useContext, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const CarritoContext = React.createContext([])

const useCarritoContext = () => useContext(CarritoContext)

const CarritoProvider = ({children}) =>{
    const [carrito, setCarrito] = useState([])

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

    const getTotal = () => {
        let total = 0;

        carrito.forEach((element) =>{
            total += (element.quantity * element.price);
        })
        return total;
    }

    const getQuantity = () =>{
        let quantity = 0;

        carrito.forEach((element) =>{
            quantity += element.quantity
        })
        return quantity;
    }

    let copia = [];

    copia = carrito;

    return (
        <>
          <CarritoContext.Provider value = {{carrito, agregarProductoCarrito, quitarProductoCarrito, vaciarCarrito, getTotal, getQuantity}}>
                {children}
          </CarritoContext.Provider>
        </> 
    );
}

export { CarritoContext, CarritoProvider, useCarritoContext};